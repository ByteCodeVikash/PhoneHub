import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Google", "Realme"];
const ramOptions = ["4GB", "6GB", "8GB", "12GB", "16GB"];
const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
const conditions = ["Like New", "Excellent", "Good", "Average"];

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([5000, 80000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const toggleSelection = (item: string, list: string[], setList: (items: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearAll = () => {
    setSelectedBrands([]);
    setSelectedRam([]);
    setSelectedStorage([]);
    setSelectedConditions([]);
    setPriceRange([5000, 80000]);
    console.log("All filters cleared");
  };

  const activeFiltersCount = 
    selectedBrands.length + 
    selectedRam.length + 
    selectedStorage.length + 
    selectedConditions.length;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" data-testid="text-filters-title">Filters</h2>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={100000}
            step={1000}
            className="mb-2"
            data-testid="slider-price"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span data-testid="text-price-min">₹{priceRange[0].toLocaleString()}</span>
            <span data-testid="text-price-max">₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Brand</h3>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center gap-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                  data-testid={`checkbox-brand-${brand.toLowerCase()}`}
                />
                <Label htmlFor={`brand-${brand}`} className="cursor-pointer text-sm">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">RAM</h3>
          <div className="space-y-2">
            {ramOptions.map((ram) => (
              <div key={ram} className="flex items-center gap-2">
                <Checkbox
                  id={`ram-${ram}`}
                  checked={selectedRam.includes(ram)}
                  onCheckedChange={() => toggleSelection(ram, selectedRam, setSelectedRam)}
                  data-testid={`checkbox-ram-${ram.toLowerCase()}`}
                />
                <Label htmlFor={`ram-${ram}`} className="cursor-pointer text-sm">
                  {ram}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Storage</h3>
          <div className="space-y-2">
            {storageOptions.map((storage) => (
              <div key={storage} className="flex items-center gap-2">
                <Checkbox
                  id={`storage-${storage}`}
                  checked={selectedStorage.includes(storage)}
                  onCheckedChange={() => toggleSelection(storage, selectedStorage, setSelectedStorage)}
                  data-testid={`checkbox-storage-${storage.toLowerCase()}`}
                />
                <Label htmlFor={`storage-${storage}`} className="cursor-pointer text-sm">
                  {storage}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Condition</h3>
          <div className="space-y-2">
            {conditions.map((condition) => (
              <div key={condition} className="flex items-center gap-2">
                <Checkbox
                  id={`condition-${condition}`}
                  checked={selectedConditions.includes(condition)}
                  onCheckedChange={() => toggleSelection(condition, selectedConditions, setSelectedConditions)}
                  data-testid={`checkbox-condition-${condition.toLowerCase().replace(' ', '-')}`}
                />
                <Label htmlFor={`condition-${condition}`} className="cursor-pointer text-sm">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button
          className="w-full"
          onClick={() => console.log("Apply filters:", { priceRange, selectedBrands, selectedRam, selectedStorage, selectedConditions })}
          data-testid="button-apply-filters"
        >
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}
