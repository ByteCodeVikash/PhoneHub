import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import phone1 from "@assets/generated_images/Black_iPhone_product_photo_fde9c38a.png";

//todo: remove mock functionality
const myListings = [
  {
    id: "1",
    image: phone1,
    title: "OnePlus 11 5G - Titan Black",
    price: 38999,
    status: "approved" as const,
    views: 145,
  },
  {
    id: "2",
    image: phone1,
    title: "Samsung Galaxy S21 FE",
    price: 32999,
    status: "pending" as const,
    views: 0,
  },
  {
    id: "3",
    image: phone1,
    title: "iPhone 12 Mini - Blue",
    price: 36999,
    status: "sold" as const,
    views: 203,
  },
];

const commissionHistory = [
  {
    id: "1",
    description: "Sale commission - iPhone 13",
    amount: 2500,
    date: "2024-01-15",
    status: "paid" as const,
  },
  {
    id: "2",
    description: "Referral commission - Samsung Galaxy S22",
    amount: 1800,
    date: "2024-01-12",
    status: "paid" as const,
  },
  {
    id: "3",
    description: "Sale commission - OnePlus 11",
    amount: 1950,
    date: "2024-01-08",
    status: "pending" as const,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-dashboard-title">
              My Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your listings, earnings, and referrals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Earnings"
              value="₹45,231"
              icon={DollarSign}
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatsCard
              title="Active Listings"
              value="2"
              icon={ShoppingBag}
              description="1 pending approval"
            />
            <StatsCard
              title="Total Referrals"
              value="24"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Conversion Rate"
              value="18.5%"
              icon={TrendingUp}
              trend={{ value: 2.3, isPositive: true }}
            />
          </div>

          <Tabs defaultValue="listings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="listings" data-testid="tab-listings">
                My Listings
              </TabsTrigger>
              <TabsTrigger value="commissions" data-testid="tab-commissions">
                Commission History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="space-y-4">
              {myListings.map((listing) => (
                <Card key={listing.id} className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{listing.title}</h3>
                          <p className="text-2xl font-bold text-primary">
                            ₹{listing.price.toLocaleString()}
                          </p>
                        </div>
                        <Badge
                          variant={
                            listing.status === "approved"
                              ? "default"
                              : listing.status === "sold"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            listing.status === "approved"
                              ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                              : listing.status === "sold"
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                              : ""
                          }
                        >
                          {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {listing.views} views
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" data-testid={`button-edit-${listing.id}`}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive"
                          data-testid={`button-delete-${listing.id}`}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="commissions" className="space-y-4">
              {commissionHistory.map((commission) => (
                <Card key={commission.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{commission.description}</h3>
                      <p className="text-sm text-muted-foreground">{commission.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        +₹{commission.amount.toLocaleString()}
                      </p>
                      <Badge
                        variant={commission.status === "paid" ? "default" : "outline"}
                        className={
                          commission.status === "paid"
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                            : ""
                        }
                      >
                        {commission.status.charAt(0).toUpperCase() + commission.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
