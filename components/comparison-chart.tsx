import { Check, X } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ComparisonChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Feature</TableHead>
          <TableHead>Bootcamps Hub</TableHead>
          <TableHead>Udemy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Revenue Share</TableCell>
          <TableCell className="text-green-600">70-85%</TableCell>
          <TableCell className="text-red-600">17.5%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brand Control</TableCell>
          <TableCell>
            <Check className="text-green-600" />
          </TableCell>
          <TableCell>
            <X className="text-red-600" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Custom Domain</TableCell>
          <TableCell>
            <Check className="text-green-600" />
          </TableCell>
          <TableCell>
            <X className="text-red-600" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>AI Support</TableCell>
          <TableCell>
            <Check className="text-green-600" />
          </TableCell>
          <TableCell>
            <X className="text-red-600" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

