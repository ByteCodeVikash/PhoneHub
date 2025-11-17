import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Browse from "@/pages/Browse";
import ProductDetail from "@/pages/ProductDetail";
import Dashboard from "@/pages/Dashboard";
import SellPhone from "@/pages/SellPhone";
import Referrals from "@/pages/Referrals";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/browse" component={Browse} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sell" component={SellPhone} />
      <Route path="/referrals" component={Referrals} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
