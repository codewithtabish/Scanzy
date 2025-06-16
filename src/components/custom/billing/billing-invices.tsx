"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, ReceiptText } from "lucide-react"

const invoices = [
  {
    id: "INV-001",
    date: "2024-05-01",
    amount: "$29.00",
    status: "Paid",
    download: "#",
  },
  {
    id: "INV-002",
    date: "2024-06-01",
    amount: "$29.00",
    status: "Paid",
    download: "#",
  },
  {
    id: "INV-003",
    date: "2024-07-01",
    amount: "$29.00",
    status: "Pending",
    download: "#",
  },
]

export default function BillingAndInvoices() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 space-y-10 bg-muted/40 rounded-xl">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">Billing & Invoices</CardTitle>
              <CardDescription>Manage your billing information and download invoices.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <ReceiptText className="w-4 h-4" />
              Update Billing
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`text-sm font-medium ${
                        invoice.status === "Paid" ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={invoice.download} download>
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
