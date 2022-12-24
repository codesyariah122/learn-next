import "@/styles/globals.css"
import "@/styles/tailwind.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main className="flex flex-col min-h-screen">
          <div className="container">
            {children}
          </div>
          <footer className='mt-auto bg-orange-500 dark:bg-orang-800 w-full'>
              <div className="grid grid-cols-3 gap-4  content-center h-12">
                  <div className='place-self-center'>
                      <h2>Develop By @codesyariah122</h2>
                  </div>
                  <div className="place-self-center">
                      Sitemap Link
                  </div>
                  <div className="place-self-center">
                    icon
                  </div>
              </div>
          </footer>
        </main>
      </body>
    </html>
  )
}
