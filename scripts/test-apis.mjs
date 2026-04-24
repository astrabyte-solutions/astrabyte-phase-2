const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

function logResult(name, pass, details = "") {
  const status = pass ? "PASS" : "FAIL";
  console.log(`${status} - ${name}${details ? `: ${details}` : ""}`);
}

async function parseJsonSafe(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

async function run() {
  let cookie = "";
  let createdBlogId = "";
  let createdServiceId = "";
  let createdProductId = "";
  const ts = Date.now();

  // 1) Unauthorized check
  const unauthorized = await fetch(`${BASE_URL}/api/admin/blogs`);
  logResult("Admin blogs unauthorized check", unauthorized.status === 401, `status ${unauthorized.status}`);

  // 2) Login
  const loginRes = await fetch(`${BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@astrabytesolutions.com", password: "admin12345" }),
  });
  cookie = loginRes.headers.get("set-cookie") || "";
  const loginJson = await parseJsonSafe(loginRes);
  logResult("Admin login", loginRes.ok && !!cookie && !!loginJson?.ok, `status ${loginRes.status}`);

  const authHeaders = cookie ? { Cookie: cookie } : {};

  // 3) Blogs CRUD
  const createBlogRes = await fetch(`${BASE_URL}/api/admin/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders },
    body: JSON.stringify({
      title: `API Test Blog ${ts}`,
      slug: `api-test-blog-${ts}`,
      category: "Automation",
      content: { intro: "test" },
      featuredImage: "/assets/images/logo-main.png",
      seoTitle: "API Test Blog",
      seoDescription: "API test blog description",
    }),
  });
  const createdBlog = await parseJsonSafe(createBlogRes);
  createdBlogId = createdBlog?.id || "";
  logResult("Create blog", createBlogRes.ok && !!createdBlogId, `status ${createBlogRes.status}`);

  const updateBlogRes = createdBlogId
    ? await fetch(`${BASE_URL}/api/admin/blogs/${createdBlogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify({
          title: `API Test Blog Updated ${ts}`,
          slug: `api-test-blog-updated-${ts}`,
          category: "Systems",
          content: { intro: "updated" },
          featuredImage: "/assets/images/logo-main.png",
          seoTitle: "Updated",
          seoDescription: "Updated desc",
        }),
      })
    : null;
  logResult("Update blog", !!updateBlogRes?.ok, updateBlogRes ? `status ${updateBlogRes.status}` : "skipped");

  const deleteBlogRes = createdBlogId
    ? await fetch(`${BASE_URL}/api/admin/blogs/${createdBlogId}`, {
        method: "DELETE",
        headers: { ...authHeaders },
      })
    : null;
  logResult("Delete blog", !!deleteBlogRes?.ok, deleteBlogRes ? `status ${deleteBlogRes.status}` : "skipped");

  // 4) Services CRUD
  const createServiceRes = await fetch(`${BASE_URL}/api/admin/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders },
    body: JSON.stringify({
      name: `API Test Service ${ts}`,
      slug: `api-test-service-${ts}`,
      heroTitle: "Hero",
      heroSubtitle: "Subtitle",
      problems: ["p1"],
      solutions: ["s1"],
      processSteps: ["step1"],
      benefits: ["b1"],
    }),
  });
  const createdService = await parseJsonSafe(createServiceRes);
  createdServiceId = createdService?.id || "";
  logResult("Create service", createServiceRes.ok && !!createdServiceId, `status ${createServiceRes.status}`);

  const updateServiceRes = createdServiceId
    ? await fetch(`${BASE_URL}/api/admin/services/${createdServiceId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify({
          name: `API Test Service Updated ${ts}`,
          slug: `api-test-service-updated-${ts}`,
          heroTitle: "Hero Updated",
          heroSubtitle: "Subtitle Updated",
          problems: ["p2"],
          solutions: ["s2"],
          processSteps: ["step2"],
          benefits: ["b2"],
        }),
      })
    : null;
  logResult("Update service", !!updateServiceRes?.ok, updateServiceRes ? `status ${updateServiceRes.status}` : "skipped");

  const deleteServiceRes = createdServiceId
    ? await fetch(`${BASE_URL}/api/admin/services/${createdServiceId}`, {
        method: "DELETE",
        headers: { ...authHeaders },
      })
    : null;
  logResult("Delete service", !!deleteServiceRes?.ok, deleteServiceRes ? `status ${deleteServiceRes.status}` : "skipped");

  // 5) Products CRUD
  const createProductRes = await fetch(`${BASE_URL}/api/admin/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders },
    body: JSON.stringify({
      name: `API Test Product ${ts}`,
      slug: `api-test-product-${ts}`,
      description: "desc",
      features: ["f1"],
      useCases: ["u1"],
      pricing: "$10",
      cta: "Book",
    }),
  });
  const createdProduct = await parseJsonSafe(createProductRes);
  createdProductId = createdProduct?.id || "";
  logResult("Create product", createProductRes.ok && !!createdProductId, `status ${createProductRes.status}`);

  const updateProductRes = createdProductId
    ? await fetch(`${BASE_URL}/api/admin/products/${createdProductId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify({
          name: `API Test Product Updated ${ts}`,
          slug: `api-test-product-updated-${ts}`,
          description: "desc updated",
          features: ["f2"],
          useCases: ["u2"],
          pricing: "$20",
          cta: "Contact",
        }),
      })
    : null;
  logResult("Update product", !!updateProductRes?.ok, updateProductRes ? `status ${updateProductRes.status}` : "skipped");

  const deleteProductRes = createdProductId
    ? await fetch(`${BASE_URL}/api/admin/products/${createdProductId}`, {
        method: "DELETE",
        headers: { ...authHeaders },
      })
    : null;
  logResult("Delete product", !!deleteProductRes?.ok, deleteProductRes ? `status ${deleteProductRes.status}` : "skipped");

  // 6) Upload API
  const uploadForm = new FormData();
  uploadForm.append("file", new Blob(["api-test-file"], { type: "text/plain" }), `api-test-${ts}.txt`);
  const uploadRes = await fetch(`${BASE_URL}/api/upload`, { method: "POST", body: uploadForm });
  const uploadJson = await parseJsonSafe(uploadRes);
  logResult("Upload file", uploadRes.ok && !!uploadJson?.fileUrl, `status ${uploadRes.status}`);

  // 7) Inquiry API (also triggers email)
  const inquiryForm = new FormData();
  inquiryForm.append("name", `API Test User ${ts}`);
  inquiryForm.append("email", process.env.TEST_INQUIRY_EMAIL || "admin@astrabytesolutions.com");
  inquiryForm.append("phone", "9999999999");
  inquiryForm.append("company", "API Test Co");
  inquiryForm.append("message", "Testing inquiry API end-to-end");
  inquiryForm.append("fileUrl", uploadJson?.fileUrl || "");
  const inquiryRes = await fetch(`${BASE_URL}/api/inquiry`, { method: "POST", body: inquiryForm });
  const inquiryJson = await parseJsonSafe(inquiryRes);
  logResult("Create inquiry + send email", inquiryRes.ok && !!inquiryJson?.ok, `status ${inquiryRes.status}`);

  // 8) Logout and protected check
  const logoutRes = await fetch(`${BASE_URL}/api/admin/logout`, {
    method: "POST",
    headers: { ...authHeaders },
  });
  logResult("Admin logout", logoutRes.ok, `status ${logoutRes.status}`);

  const postLogoutProtected = await fetch(`${BASE_URL}/api/admin/blogs`);
  logResult("Protected route after logout", postLogoutProtected.status === 401, `status ${postLogoutProtected.status}`);
}

run().catch((error) => {
  console.error("FAIL - E2E test runner crashed:", error);
  process.exit(1);
});
