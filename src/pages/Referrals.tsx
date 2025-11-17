import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Users, DollarSign, TrendingUp } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Referrals() {
  const { toast } = useToast();
  const referralLink = "https://phonemarket.com/ref/USER123";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  //todo: remove mock functionality
  const referralStats = [
    { label: "Total Clicks", value: 142 },
    { label: "Conversions", value: 24 },
    { label: "Conversion Rate", value: "16.9%" },
  ];

  const referralHistory = [
    {
      id: "1",
      name: "Rohit Sharma",
      type: "Buyer",
      amount: 1500,
      date: "2024-01-15",
      status: "paid" as const,
    },
    {
      id: "2",
      name: "Priya Patel",
      type: "Seller",
      amount: 2200,
      date: "2024-01-12",
      status: "paid" as const,
    },
    {
      id: "3",
      name: "Amit Kumar",
      type: "Buyer",
      amount: 1800,
      date: "2024-01-08",
      status: "pending" as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-referrals-title">
              Referral Program
            </h1>
            <p className="text-muted-foreground">
              Share your link and earn commission on every sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Earnings"
              value="₹18,450"
              icon={DollarSign}
              trend={{ value: 15, isPositive: true }}
            />
            <StatsCard
              title="Total Referrals"
              value="24"
              icon={Users}
              description="8 this month"
            />
            <StatsCard
              title="Conversion Rate"
              value="16.9%"
              icon={TrendingUp}
              trend={{ value: 3.2, isPositive: true }}
            />
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Referral Link</h2>
            <div className="flex gap-3">
              <Input
                value={referralLink}
                readOnly
                className="flex-1"
                data-testid="input-referral-link"
              />
              <Button
                onClick={copyToClipboard}
                data-testid="button-copy-link"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
              <Button
                variant="outline"
                onClick={() => console.log("Share clicked")}
                data-testid="button-share-link"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Share this link with friends. When they buy or sell a phone, you'll earn commission!
            </p>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Share Your Link</h3>
                <p className="text-sm text-muted-foreground">
                  Share your unique referral link with friends and family
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. They Buy or Sell</h3>
                <p className="text-sm text-muted-foreground">
                  When someone uses your link to buy or sell a phone
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Earn Commission</h3>
                <p className="text-sm text-muted-foreground">
                  You earn 5-10% commission on completed transactions
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Referral History</h2>
            <div className="space-y-4">
              {referralHistory.map((referral) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between p-4 border rounded-md"
                >
                  <div>
                    <h3 className="font-semibold">{referral.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {referral.type} • {referral.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">
                      +₹{referral.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {referral.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
