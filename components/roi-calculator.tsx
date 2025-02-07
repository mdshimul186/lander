"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ROICalculator() {
  const [courseSales, setCourseSales] = useState<number>(100)
  const [coursePrice, setCoursePrice] = useState<number>(100)
  const [showResults, setShowResults] = useState(true)

  // Calculate earnings
  const calculateEarnings = () => {
    const totalSales = courseSales * coursePrice
    const udemyEarnings = totalSales * 0.175 // Udemy takes 82.5%
    const bootcampPrice = 10000
    const bootcampStudents = Math.ceil(totalSales / bootcampPrice)
    const bootcampEarnings = bootcampStudents * bootcampPrice * 0.8 // Keep 80%

    return {
      udemyEarnings,
      bootcampEarnings,
      difference: bootcampEarnings - udemyEarnings,
      percentageIncrease: ((bootcampEarnings - udemyEarnings) / udemyEarnings) * 100,
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const results = calculateEarnings()

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ROI Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how much more you could earn by transitioning from Udemy to high-ticket bootcamps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Number of Course Sales (Monthly)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[courseSales]}
                      onValueChange={(value) => setCourseSales(value[0])}
                      min={1}
                      max={1000}
                      step={1}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={courseSales}
                      onChange={(e) => setCourseSales(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Course Price ($)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[coursePrice]}
                      onValueChange={(value) => setCoursePrice(value[0])}
                      min={10}
                      max={500}
                      step={10}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={coursePrice}
                      onChange={(e) => setCoursePrice(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>

                <Button className="w-full" onClick={() => setShowResults(true)}>
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Earnings
                </Button>
              </div>
            </CardContent>
          </Card>

          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-red-500" />
                      Current Udemy Earnings (Monthly)
                    </h3>
                    <p className="text-3xl font-bold text-red-500">{formatCurrency(results.udemyEarnings)}</p>
                    <p className="text-sm text-muted-foreground mt-2">After Udemy's 82.5% cut</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                      Potential Bootcamps Hub Earnings (Monthly)
                    </h3>
                    <p className="text-3xl font-bold text-green-500">{formatCurrency(results.bootcampEarnings)}</p>
                    <p className="text-sm text-muted-foreground mt-2">Keeping 80% of high-ticket sales</p>
                  </CardContent>
                </Card>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-primary/10 p-6 rounded-lg"
                >
                  <p className="text-lg mb-2">Additional Monthly Revenue</p>
                  <p className="text-4xl font-bold text-primary">{formatCurrency(results.difference)}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    That's a {Math.round(results.percentageIncrease)}% increase!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

