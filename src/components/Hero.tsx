import { ArrowRight, Search, Calendar, Activity } from "lucide-react";
import { Button } from "@radix-ui/themes";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden mx-4 md:py-24">
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-health-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-health-100 text-health-700 rounded-full text-sm font-medium">
              Your Health, Our Priority
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Healthcare
              <span className="text-primary"> For Everyone</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Experience quality healthcare with a patient-centered approach.
              Access your medical records, schedule appointments, and connect
              with experienced doctors all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="4"
                className="flex items-center justify-center bg-primary text-black rounded-lg p-2 hover:bg-primary/80 transition-colors cursor-pointer border-black border-2"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="4" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-2xl text-health-600">98%</div>
                <div className="text-sm text-muted-foreground">
                  Patient Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-health-600">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Online Support
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-health-600">100+</div>
                <div className="text-sm text-muted-foreground">Specialists</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-green-500/20 rounded-xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl p-3 shadow-lg">
                <Activity className="h-6 w-6 text-black" />
              </div>

              <h3 className="text-xl font-bold mb-6">
                What are you looking for?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center p-4 border rounded-lg card-hover cursor-pointer bg-secondary/50">
                  <Search className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Find a doctor</h4>
                    <p className="text-sm text-muted-foreground">
                      Search by specialty or name
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg card-hover cursor-pointer bg-secondary/50">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Book an appointment</h4>
                    <p className="text-sm text-muted-foreground">
                      Schedule an in-person or virtual visit
                    </p>
                  </div>
                </div>

                <Button className="w-full flex items-center justify-center bg-primary text-black rounded-lg p-4 hover:bg-primary/80 transition-colors cursor-pointer">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-health-200 rounded-full -z-10"></div>
            <div className="absolute bottom-12 -right-12 w-24 h-24 bg-accent/30 rounded-full animate-float -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
