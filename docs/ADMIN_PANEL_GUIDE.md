# Admin Panel Guide

This project includes a protected admin panel and API-based CMS management for blogs, services, products, inquiries, file uploads, and email notifications.

## 1) Prerequisites

- PostgreSQL running locally
- `DATABASE_URL` configured in `.env`
- SMTP configured in `.env`:
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `MAIL_FROM` (recommended: same mailbox/domain as `SMTP_USER`)
- `JWT_SECRET` configured
- `ADMIN_SECRET_PATH` configured (example: `/admin-x9k2a7q`)

## 2) Setup Commands

Run from project root:

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

## 3) Admin Login

- URL: `http://localhost:3000/admin-x9k2a7q/login`
- Seeded admin credentials:
  - Email: `admin@astrabytesolutions.com`
  - Password: `admin12345`

> Change this password immediately in production.

## 4) Admin Screens

- Dashboard: `/<ADMIN_SECRET_PATH>`
  - total blogs
  - total services
  - total products
  - total inquiries
- CRUD screens:
  - `/<ADMIN_SECRET_PATH>/blogs`
  - `/<ADMIN_SECRET_PATH>/services`
  - `/<ADMIN_SECRET_PATH>/products`
- Inquiry list:
  - `/<ADMIN_SECRET_PATH>/inquiries`

## 5) API Endpoints

### Auth

- `POST /api/admin/login` - sets admin cookie
- `POST /api/admin/logout` - clears admin cookie

### Blogs

- `GET /api/admin/blogs`
- `POST /api/admin/blogs`
- `PUT /api/admin/blogs/:id`
- `DELETE /api/admin/blogs/:id`

### Services

- `GET /api/admin/services`
- `POST /api/admin/services`
- `PUT /api/admin/services/:id`
- `DELETE /api/admin/services/:id`

### Products

- `GET /api/admin/products`
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`

### Inquiry + Upload

- `POST /api/upload` (multipart `file`) -> returns `fileUrl`
- `POST /api/inquiry` (multipart form fields) -> stores inquiry + sends emails

## 6) Inquiry Form Fields

Expected fields for `POST /api/inquiry`:

- `name` (required)
- `email` (required)
- `message` (required)
- `phone` (optional)
- `company` (optional)
- `fileUrl` (optional; from `/api/upload`)

## 7) Email Notes

- Inquiry endpoint sends:
  - confirmation email to user
  - notification email to admin (`SMTP_USER`)
- Email HTML template source: `email-template.html`
- Logo in template is replaced with `/assets/images/logo-main.png` dynamically.

## 8) Security Notes

- Keep `ADMIN_SECRET_PATH` and `JWT_SECRET` private.
- Use secure SMTP credentials and set a valid `MAIL_FROM`.
- Prefer HTTPS in production.
- Rotate seeded/default credentials before deployment.

## 9) API Smoke Test

Automated script:

```bash
node scripts/test-apis.mjs
```

This validates:

- auth protection + login/logout
- blog/service/product create/update/delete
- file upload
- inquiry creation + email send
