import "./globals.css";
import { notoSansKr, eastSeaDokdo, poorStory } from "./font";

export const metadata = {
  title: "박루다 👦🏻, 첫 돌 🎂",
  description: "박루다의 첫돌이에요!",
};

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(poorStory.className, eastSeaDokdo.variable)}>
        {children}
      </body>
    </html>
  );
}
