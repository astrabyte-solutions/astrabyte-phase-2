"use client";

import { useMemo, useState } from "react";

const TIME_SLOTS = [
  "11:30 AM",
  "01:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
];

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function parseTimeToMinutes(slot: string) {
  const [time, modifier] = slot.split(" ");
  const [h, m] = time.split(":").map(Number);
  let hour = h;
  if (modifier === "PM" && hour !== 12) hour += 12;
  if (modifier === "AM" && hour === 12) hour = 0;
  return hour * 60 + m;
}

export default function BookCallTemplate() {
  const today = useMemo(() => new Date(), []);
  const todayStart = useMemo(() => new Date(today.getFullYear(), today.getMonth(), today.getDate()), [today]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("1-10 Employees");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const calendarDays = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7;
    const cells: Array<{ day: number; date: Date | null }> = [];

    for (let i = 0; i < startOffset; i += 1) cells.push({ day: 0, date: null });
    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push({ day, date: new Date(year, month, day) });
    }
    return cells;
  }, [viewMonth]);

  const selectedScheduleLabel =
    selectedDate && selectedTime
      ? `${selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" })} @ ${selectedTime}`
      : "Select date and time";

  function isSameDay(a: Date | null, b: Date | null) {
    if (!a || !b) return false;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function isPastDate(date: Date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return d < todayStart;
  }

  function isToday(date: Date | null) {
    if (!date) return false;
    return isSameDay(date, today);
  }

  function isPastSlotForSelectedDate(slot: string) {
    if (!selectedDate || !isToday(selectedDate)) return false;
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    return parseTimeToMinutes(slot) < nowMinutes;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "idle", message: "" });

    if (!name || !email || !message) {
      setSubmitState({ type: "error", message: "Please fill all required details." });
      return;
    }
    if (!selectedDate || !selectedTime) {
      setSubmitState({ type: "error", message: "Please select both date and time." });
      return;
    }
    if (isPastDate(selectedDate) || isPastSlotForSelectedDate(selectedTime)) {
      setSubmitState({ type: "error", message: "Past date/time cannot be booked. Please select a current or upcoming slot." });
      return;
    }

    setIsSubmitting(true);
    try {
      let fileUrl = "";
      if (attachment) {
        const uploadForm = new FormData();
        uploadForm.append("file", attachment);
        const uploadRes = await fetch("/api/upload", { method: "POST", body: uploadForm });
        const uploadJson = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(uploadJson?.error || "File upload failed");
        fileUrl = uploadJson.fileUrl || "";
      }

      const inquiryForm = new FormData();
      inquiryForm.append("name", name);
      inquiryForm.append("email", email);
      inquiryForm.append("phone", phone);
      inquiryForm.append("company", company);
      inquiryForm.append("message", `Team Size: ${teamSize}\nPreferred Schedule: ${selectedScheduleLabel}\n${message}`);
      inquiryForm.append("fileUrl", fileUrl);

      const inquiryRes = await fetch("/api/inquiry", { method: "POST", body: inquiryForm });
      const inquiryJson = await inquiryRes.json();
      if (!inquiryRes.ok) throw new Error(inquiryJson?.error || "Failed to schedule call");

      setSubmitState({ type: "success", message: "Call scheduled successfully. Confirmation email has been sent." });
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setTeamSize("1-10 Employees");
      setMessage("");
      setAttachment(null);
      setSelectedDate(null);
      setSelectedTime("");
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong while scheduling.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Header */}
      
      <main className="pt-32 pb-20 relative">
        <div className="glow-effect top-[-100px] left-[-100px]"></div>
        <div className="glow-effect bottom-[100px] right-[-100px]"></div>
        {/* Section 1: Hero & Intro */}
        <section id="hero-section" className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Book Your
            <span className="text-brand-accent">
               &nbsp;Strategy Call
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-brand-secondary max-w-2xl mx-auto font-light leading-relaxed">
            A clear, no-pressure conversation to understand your operations and map the highest-impact next steps.
          </h2>
        </section>
        {/* Section 2: Booking Interface */}
        <form id="booking-interface" onSubmit={handleSubmit} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          {/* Form Card */}
          <div id="form-card" className="lg:col-span-5 bg-brand-card border border-brand-border p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-8">
              Fill the form to schedule your call
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Name
                </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="John Doe" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Company
                </label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Acme Inc." className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Email
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@company.com" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Phone
                </label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="+91..." className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Team Size
                </label>
                <select value={teamSize} onChange={(e) => setTeamSize(e.target.value)} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white appearance-none">
                  <option>
                    1-10 Employees
                  </option>
                  <option>
                    11-50 Employees
                  </option>
                  <option>
                    51-200 Employees
                  </option>
                  <option>
                    200+ Employees
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Biggest operations gap
                </label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} required placeholder="Describe your current challenge..." className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-secondary mb-2">
                  Upload File (optional)
                </label>
                <input onChange={(e) => setAttachment(e.target.files?.[0] || null)} type="file" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" />
              </div>
            </div>
          </div>
          {/* Calendar Card */}
          <div id="calendar-card" className="lg:col-span-7 bg-brand-card border border-brand-border p-8 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">
                Pick Your Time
              </h3>
              <div className="text-sm text-brand-secondary">
                Timezone: IST (UTC +5:30)
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                disabled={viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() === today.getMonth()}
                onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}
                className="px-3 py-2 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-accent transition-colors disabled:opacity-40"
              >
                Prev
              </button>
              <div className="text-sm font-semibold">
                {viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
              <button type="button" onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))} className="px-3 py-2 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-accent transition-colors">
                Next
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-8">
              {WEEK_DAYS.map((label) => (
                <div key={label} className="text-center text-xs text-brand-secondary py-2 uppercase font-bold">
                  {label}
                </div>
              ))}
              {calendarDays.map((cell, index) => {
                if (!cell.date) {
                  return <div key={`empty-${index}`} className="aspect-square flex items-center justify-center rounded-lg text-brand-secondary opacity-30"></div>;
                }
                const isSelected = isSameDay(selectedDate, cell.date);
                const isPast = isPastDate(cell.date);
                return (
                  <button
                    key={cell.date.toISOString()}
                    type="button"
                    disabled={isPast}
                    onClick={() => {
                      setSelectedDate(cell.date);
                      setSelectedTime("");
                    }}
                    className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? "bg-brand-accent border border-brand-accent"
                        : isPast
                          ? "bg-brand-bg border border-brand-border opacity-30 cursor-not-allowed"
                          : "bg-brand-bg border border-brand-border hover:border-brand-accent"
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[320px] overflow-y-auto pr-1">
              {TIME_SLOTS.map((slot) => {
                const active = selectedTime === slot;
                const isPastSlot = isPastSlotForSelectedDate(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isPastSlot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-4 rounded-xl text-sm transition-all ${
                      active
                        ? "bg-brand-accent border border-brand-accent shadow-lg shadow-brand-accent/20 font-bold"
                        : isPastSlot
                          ? "bg-brand-bg border border-brand-border opacity-40 cursor-not-allowed"
                          : "bg-brand-bg border border-brand-border hover:border-brand-accent"
                    } disabled:opacity-40`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <div className="mt-10 pt-8 border-t border-brand-border flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-brand-secondary">
                You've selected
                <span className="text-white font-semibold">
                  {" "}
                  {selectedScheduleLabel}
                </span>
              </p>
              <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-brand-accent hover:bg-opacity-90 transition-all px-10 py-4 rounded-xl text-md font-bold shadow-xl shadow-brand-accent/30 disabled:opacity-60">
                Schedule Call
              </button>
            </div>
            {submitState.type !== "idle" && (
              <p className={`mt-4 text-sm ${submitState.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {submitState.message}
              </p>
            )}
          </div>
        </form>
        {/* Section 3: Trust Elements */}
        <section id="trust-elements" className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">
            What You’ll Get
          </h2>
        </section>
        {/* Section 4: Benefits */}
        <section id="benefits" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-card border border-brand-border rounded-2xl">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                <i className="text-brand-accent text-xl" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </i>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                ✔ Identify the real bottlenecks
              </h3>
              <p className="text-brand-secondary leading-relaxed">
                We pinpoint where manual work, delays, and handoffs are slowing growth.
              </p>
            </div>
            <div className="p-8 bg-brand-card border border-brand-border rounded-2xl">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                <i className="text-brand-accent text-xl" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-layer-group" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path>
                  </svg>
                </i>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                ✔ Prioritized action plan
              </h3>
              <p className="text-brand-secondary leading-relaxed">
                You get a practical roadmap focused on the highest-ROI improvements first.
              </p>
            </div>
            <div className="p-8 bg-brand-card border border-brand-border rounded-2xl">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                <i className="text-brand-accent text-xl" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                  </svg>
                </i>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                ✔ Clear next steps
              </h3>
              <p className="text-brand-secondary leading-relaxed">
                Leave knowing exactly what to implement next and why it matters.
              </p>
            </div>
          </div>
        </section>
        {/* Section 5: Final CTA */}
        <section id="cta-section" className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-brand-accent rounded-3xl p-12 md:p-20 text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-white/20 blur-[120px] rotate-12"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              This is not a sales call.
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              It is a working session to understand your goals, assess fit, and give honest direction. No pressure.
            </p>
            {/* <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-accent px-10 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                Book Your Call
              </button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Learn Our Process
              </button>
            </div> */}
          </div>
        </section>
      </main>
      {/* Footer */}
      
    </>
  );
}
