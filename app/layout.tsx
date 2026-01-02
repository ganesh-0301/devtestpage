import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TravelBlog - Explore Amazing Destinations',
  description: 'Discover travel stories from India, Nepal, Bhutan, and Dubai',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w, d) {
  try {
      if (w._psp) return;
      var q = function() {
          q.q.push(arguments)
      };
      q.q = [];w._psp = q;var s = d.createElement("script");s.async = 1;s.src = "https://app-test.prospectory.ai/psp.tracker.test.js";
      var f = d.getElementsByTagName("script")[0];f.parentNode.insertBefore(s, f);
      s.onload = function() {
          try {
              (w.tracking && w.tracking.load) && w.tracking.load({
                  pspClientId: "cmea35nrh000yof25q5tdvqx5",
                  pspUserId: "cm7bu78900040jqtbxqnmjto2"
              })
          } catch (e) {}
      };
  } catch (e) {}
})(window, document);
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

