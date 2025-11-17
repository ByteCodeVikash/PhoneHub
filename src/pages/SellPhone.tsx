import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function SellPhone() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    battery: "",
    screenCondition: "",
    purchaseDate: "",
    originalPrice: "",
    sellingPrice: "",
    condition: "",
    hasBox: false,
    hasBill: false,
    hasCharger: false,
    description: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-sell-title">
              Sell Your Phone
            </h1>
            <p className="text-muted-foreground">
              List your phone for sale in just a few simple steps
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full mx-1 ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Phone Details</span>
              <span>Images & Pricing</span>
              <span>Review & Submit</span>
            </div>
          </div>

          {step === 1 && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Phone Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="brand">Brand *</Label>
                    <Select
                      value={formData.brand}
                      onValueChange={(value) =>
                        setFormData({ ...formData, brand: value })
                      }
                    >
                      <SelectTrigger id="brand" data-testid="select-brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apple">Apple</SelectItem>
                        <SelectItem value="Samsung">Samsung</SelectItem>
                        <SelectItem value="OnePlus">OnePlus</SelectItem>
                        <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="model">Model *</Label>
                    <Input
                      id="model"
                      placeholder="e.g., iPhone 13 Pro Max"
                      value={formData.model}
                      onChange={(e) =>
                        setFormData({ ...formData, model: e.target.value })
                      }
                      data-testid="input-model"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ram">RAM *</Label>
                    <Select
                      value={formData.ram}
                      onValueChange={(value) =>
                        setFormData({ ...formData, ram: value })
                      }
                    >
                      <SelectTrigger id="ram" data-testid="select-ram">
                        <SelectValue placeholder="Select RAM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4GB">4GB</SelectItem>
                        <SelectItem value="6GB">6GB</SelectItem>
                        <SelectItem value="8GB">8GB</SelectItem>
                        <SelectItem value="12GB">12GB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="storage">Storage *</Label>
                    <Select
                      value={formData.storage}
                      onValueChange={(value) =>
                        setFormData({ ...formData, storage: value })
                      }
                    >
                      <SelectTrigger id="storage" data-testid="select-storage">
                        <SelectValue placeholder="Select storage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="64GB">64GB</SelectItem>
                        <SelectItem value="128GB">128GB</SelectItem>
                        <SelectItem value="256GB">256GB</SelectItem>
                        <SelectItem value="512GB">512GB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="battery">Battery Health *</Label>
                    <Input
                      id="battery"
                      placeholder="e.g., 85%"
                      value={formData.battery}
                      onChange={(e) =>
                        setFormData({ ...formData, battery: e.target.value })
                      }
                      data-testid="input-battery"
                    />
                  </div>

                  <div>
                    <Label htmlFor="condition">Condition *</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) =>
                        setFormData({ ...formData, condition: value })
                      }
                    >
                      <SelectTrigger id="condition" data-testid="select-condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Like New">Like New</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Average">Average</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Accessories Available</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="hasBox"
                        checked={formData.hasBox}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, hasBox: checked as boolean })
                        }
                        data-testid="checkbox-box"
                      />
                      <Label htmlFor="hasBox" className="cursor-pointer">
                        Original Box
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="hasBill"
                        checked={formData.hasBill}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, hasBill: checked as boolean })
                        }
                        data-testid="checkbox-bill"
                      />
                      <Label htmlFor="hasBill" className="cursor-pointer">
                        Bill/Invoice
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="hasCharger"
                        checked={formData.hasCharger}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, hasCharger: checked as boolean })
                        }
                        data-testid="checkbox-charger"
                      />
                      <Label htmlFor="hasCharger" className="cursor-pointer">
                        Charger & Cable
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    size="lg"
                    data-testid="button-next-step"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Images & Pricing</h2>
              <div className="space-y-6">
                <div>
                  <Label>Upload Phone Images *</Label>
                  <div className="mt-2 border-2 border-dashed rounded-md p-8 text-center hover-elevate cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Upload at least 3 clear photos of your phone
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="originalPrice">Original Price (₹) *</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      placeholder="e.g., 79900"
                      value={formData.originalPrice}
                      onChange={(e) =>
                        setFormData({ ...formData, originalPrice: e.target.value })
                      }
                      data-testid="input-original-price"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellingPrice">Selling Price (₹) *</Label>
                    <Input
                      id="sellingPrice"
                      type="number"
                      placeholder="e.g., 52999"
                      value={formData.sellingPrice}
                      onChange={(e) =>
                        setFormData({ ...formData, sellingPrice: e.target.value })
                      }
                      data-testid="input-selling-price"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your phone's condition, any defects, etc."
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    data-testid="textarea-description"
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    data-testid="button-previous"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    size="lg"
                    data-testid="button-next-review"
                  >
                    Review & Submit
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Review Your Listing</h2>
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Brand</p>
                    <p className="font-medium">{formData.brand || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Model</p>
                    <p className="font-medium">{formData.model || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">RAM</p>
                    <p className="font-medium">{formData.ram || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Storage</p>
                    <p className="font-medium">{formData.storage || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Selling Price</p>
                    <p className="font-medium text-primary text-xl">
                      ₹{formData.sellingPrice || "0"}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Condition</p>
                    <p className="font-medium">{formData.condition || "Not specified"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-md p-4 mb-6">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  Your listing will be reviewed by our team and published within 24 hours.
                </p>
              </div>
              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  data-testid="button-submit-listing"
                >
                  Submit Listing
                </Button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Listing Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Your phone listing has been submitted for review. We'll notify you once it's
                approved and live on the marketplace.
              </p>
              <Button onClick={() => (window.location.href = "/dashboard")}>
                Go to Dashboard
              </Button>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
