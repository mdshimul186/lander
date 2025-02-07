import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I migrate my Udemy students to Bootcamps Hub?</AccordionTrigger>
            <AccordionContent>
              Yes! We help import student data + offer email templates to transition them. We take care of the whole
              Migration and Onboarding Process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I don't earn 10k/student?</AccordionTrigger>
            <AccordionContent>
              Our AI tools and TS4U's templates guarantee success—or we'll extend your free trial.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How does the 15-30% revenue share work?</AccordionTrigger>
            <AccordionContent>
              We take 15-30% only after you earn. Example: 10k fee → you keep 8k, we take 2k.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

