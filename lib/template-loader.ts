import { readFile } from "node:fs/promises";
import path from "node:path";

type TemplateResult = { styles: string[]; body: string };

export async function loadTemplate(filename: string): Promise<TemplateResult> {
  const filePath = path.join(process.cwd(), "ui-design", filename);
  const html = await readFile(filePath, "utf8");

  const styles: string[] = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleMatch: RegExpExecArray | null;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    styles.push(styleMatch[1]);
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");

  return { styles, body };
}
