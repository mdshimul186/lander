import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold">Bootcamps Hub</h3>
            <p className="mt-2 text-sm text-muted-foreground">Turn your courses into premium bootcamps</p>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Case Studies</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  TS4U Case Study
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Featured In</h4>
            <p className="mt-2 text-sm text-muted-foreground">TechServes4U</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bootcamps Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

