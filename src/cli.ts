#!/usr/bin/env node
import fs from "fs";
import path from "path";

const [, , componentName] = process.argv;

if (!componentName) {
  console.error("❌ Nhập tên component. Ví dụ: npx @2602hoang/ui-kit Button");
  process.exit(1);
}

const dir = path.join(process.cwd(), "src/components", componentName);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(
  path.join(dir, `${componentName}.tsx`),
  `const ${componentName} = () => <div>${componentName}</div>; export default ${componentName};`
);

console.log(`✅ Component ${componentName} đã được tạo.`);
