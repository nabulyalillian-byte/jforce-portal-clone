import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type LucideIcon } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Download,
  Facebook,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  PackageCheck,
  Percent,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  Trophy,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JOIN_URL = "https://jforce.jumia.ug/join";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Join JForce — Make Money as a Sales Consultant" },
      {
        name: "description",
        content:
          "Join Jumia JForce, sell trusted products on flexible hours, and earn competitive commissions as an independent sales consultant.",
      },
      { property: "og:title", content: "Join JForce — Make Money as a Sales Consultant" },
      {
        property: "og:description",
        content: "Set your own hours, sell trusted products, and earn competitive commissions with Jumia JForce.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

type Feature = { icon: LucideIcon; title: string; description: string };

const benefits: Feature[] = [
  {
    icon: TrendingUp,
    title: "Unlimited Earning Potential",
    description: "Unlock higher commission rates as your monthly sales volume grows.",
  },
  {
    icon: ShieldCheck,
    title: "Sell Trusted Products",
    description: "Represent Africa's leading e-commerce brand and thousands of genuine products.",
  },
  {
    icon: Clock3,
    title: "Flexible Work Hours",
    description: "Set your own schedule and build your business from wherever you are.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support & Community",
    description: "Get training, mentorship, tools, and support from a growing agent network.",
  },
];

const agentTypes: Feature[] = [
  { icon: GraduationCap, title: "Students", description: "Earn alongside your studies and build valuable sales experience." },
  { icon: Megaphone, title: "Marketing Professionals", description: "Turn your marketing skills and network into an extra income stream." },
  { icon: Target, title: "Sales Enthusiasts", description: "Put your passion for selling to work with products people already love." },
  { icon: BriefcaseBusiness, title: "Entrepreneurs & Business Owners", description: "Add a trusted new revenue line to your existing business." },
  { icon: Smartphone, title: "Social Media Influencers", description: "Recommend useful products to your audience and earn on every sale." },
  { icon: Sparkles, title: "Anyone Passionate About Extra Income", description: "No matter your background, your ambition can open the door." },
];

const joinSteps = [
  { title: "Sign Up", description: "Complete the simple online application and become a JForce consultant.", icon: UserRound },
  { title: "Get Trained", description: "Learn the platform, products, and sales techniques with expert support.", icon: BookOpenCheck },
  { title: "Start Selling", description: "Connect customers to products they need and place orders on Jumia.", icon: ShoppingCart },
  { title: "Earn Commissions", description: "Get rewarded for delivered sales and grow your monthly earnings.", icon: CircleDollarSign },
];

const orderSteps = [
  { step: 1, title: "Step 1", description: "Download the Jumia app on Google Play Store or the Apple Store." },
  { step: 2, title: "Step 2", description: "Open the app you just downloaded or visit the Jumia homepage." },
  { step: 3, title: "Step 3", description: "Log into your Jumia account with your JForce details. Purchases must be made through this account." },
  { step: 4, title: "Step 4", description: "Search for the product you want or browse through categories." },
  { step: 5, title: "Step 5", description: "Select the item and add it to your cart. You can adjust the quantity." },
  { step: 6, title: "Step 6", description: "Review your cart to confirm all items, variations, and quantities before continuing." },
  { step: 7, title: "Step 7", description: "Click Proceed to Checkout to enter recipient's delivery information." },
  { step: 8, title: "Step 8", description: "Enter recipient's name, phone number, and detailed delivery address accurately." },
  { step: 9, title: "Step 9", description: "Choose your preferred delivery method (Door Delivery or Jumia Pickup Station)." },
  { step: 10, title: "Step 10", description: "Choose payment method (Prepaid or Cash on Delivery where available)." },
  { step: 11, title: "Step 11", description: "Double-check order summary including delivery fees and total amount." },
  { step: 12, title: "Step 12", description: "Place the order and note down the Order Number for tracking." },
];

const brands = ["Xiaomi", "adidas", "Century", "NIVEA", "SAMSUNG", "Unilever", "Reckitt", "TECNO", "Infinix", "ECOFLOW"];

const levels = [
  { name: "Probation", target: "UGX 180,000", color: "bg-teal-600", icon: MapPin },
  { name: "Bronze", target: "UGX 900,000", color: "bg-level-bronze", icon: Star },
  { name: "Silver", target: "UGX 2,700,000", color: "bg-level-silver", icon: Star },
  { name: "Gold", target: "UGX 5,500,000", color: "bg-level-gold", icon: Trophy },
  { name: "Captain", target: "UGX 11,000,000", color: "bg-amber-600", icon: Target },
  { name: "Platinum", target: "UGX 18,000,000", color: "bg-level-platinum", icon: Trophy },
  { name: "Elite", target: "UGX 27,000,000", color: "bg-indigo-600", icon: Rocket },
  { name: "Diamond", target: "UGX 35,000,000", color: "bg-level-diamond", icon: Sparkles },
];

const faqs = [
  ["What is JForce?", "JForce is Jumia's independent sales consultant programme. Agents help customers shop on Jumia and earn commissions on eligible delivered orders."],
  ["How do I make money online with Jumia?", "Register as a JForce consultant, connect customers with products on Jumia, place their orders correctly, and earn commission after eligible orders are delivered."],
  ["What can I sell?", "You can sell eligible products across Jumia's wide catalogue, including fashion, beauty, electronics, home products, phones, books, sports items, and more."],
  ["How much can I make?", "Your earnings depend on your location, product bucket, delivered sales value, and monthly performance. Use the calculator on this page for an estimate."],
  ["Do I need to keep products in stock?", "No. You help customers order through Jumia, while Jumia and its marketplace sellers handle product inventory and fulfilment."],
  ["What is activation?", "Activation is achieved when a consultant meets the qualifying delivered-order value required for the commission period."],
];

const managers = [
  { name: "Dorcas Adetona", role: "Operations Manager", photo: "https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/jforee.jpg", position: "object-center" },
  { name: "Ezekiel Solomon", role: "Regional Manager Kampala & Central", photo: "https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/managers/Ezekiel-solomon-updated.jpg", position: "object-top" },
  { name: "Stephen Ogwuche", role: "Regional Manager Western Region", photo: "https://ng.jumia.is/cms/0-1-initiatives/jforce/stephen-ogwuche.png", position: "object-top" },
  { name: "Daniel Akuma", role: "Regional Manager Eastern Region", photo: "https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/managers/akuma-daiel.png", position: "object-top" },
  { name: "Kasimu Mudi", role: "Regional Manager Northern Region", photo: "https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/jforee.jpg", position: "object-right" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-extrabold text-jforce-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}

function EarningsCalculator() {
  const [location, setLocation] = useState("prime");
  const [bucket, setBucket] = useState("medium");
  const [sales, setSales] = useState("360000");
  const rates =
    location === "prime"
      ? { low: 1.0, medium: 1.5, high: 2.0, super_high: 3.0 }
      : { low: 1.5, medium: 2.3, high: 3.0, super_high: 4.5 };
  const rate = rates[bucket as keyof typeof rates];
  const amount = Number(sales.replace(/[^0-9.]/g, "")) || 0;
  const commission = useMemo(() => amount * (rate / 100), [amount, rate]);

  const money = (value: number) =>
    new Intl.NumberFormat("en-UG", { style: "currency", currency: "UGX", maximumFractionDigits: 0 }).format(value);

  return (
    <div className="grid overflow-hidden rounded-lg bg-card shadow-jforce lg:grid-cols-[1.05fr_.95fr]">
      <div className="p-6 sm:p-9">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><BadgeDollarSign className="size-6" /></span>
          <div><h3 className="text-xl font-bold text-jforce-navy">Estimate your earnings</h3><p className="text-sm text-muted-foreground">See your direct commission instantly.</p></div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location" className="font-semibold">Select Region Location</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="location" className="h-12 bg-background"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="prime">Prime (Greater Kampala &amp; Entebbe)</SelectItem>
                <SelectItem value="non_prime">Non Prime (Upcountry)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bucket" className="font-semibold">Select Product Bucket</Label>
            <Select value={bucket} onValueChange={setBucket}>
              <SelectTrigger id="bucket" className="h-12 bg-background"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low commission bucket</SelectItem>
                <SelectItem value="medium">Medium commission bucket</SelectItem>
                <SelectItem value="high">High commission bucket</SelectItem>
                <SelectItem value="super_high">Super High commission bucket</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sales" className="font-semibold">Total Sales Amount (UGX)</Label>
            <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">UGX</span><Input id="sales" inputMode="decimal" value={sales} onChange={(event) => setSales(event.target.value)} className="h-12 pl-14 text-base" aria-describedby="sales-hint" /></div>
            <p id="sales-hint" className="text-xs text-muted-foreground">Enter your eligible delivered sales for the period.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-jforce-navy p-6 text-primary-foreground sm:p-9">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jforce-aqua">Estimated Direct Commission</p>
          <p className="mt-5 text-4xl font-extrabold sm:text-5xl">{money(commission)}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm font-semibold"><Percent className="size-4 text-jforce-aqua" />{rate}% direct commission rate</div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/20 pt-6">
          <p className="font-bold">Indirect Commission</p>
          <p className="mt-2 text-sm leading-6 text-primary-foreground/75">Indirect commission is fixed at 1% across all levels once completed team sales reach UGX 360,000/month (excluding team leader).</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate min-h-[min(860px,92vh)] overflow-hidden bg-hero py-8 lg:py-14">
        <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur"><Sparkles className="size-4" /> Turn connections into income</div>
            <h1 className="text-4xl font-black leading-[1.08] text-jforce-navy sm:text-5xl lg:text-6xl">Make Money Online by Joining JForce <span className="text-gradient">as a Sales Consultant</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Set your own working hours, earn competitive commissions, and be part of a growing community of successful sales professionals.</p>
            <Button asChild size="lg" className="mt-9 h-13 rounded-full px-7 text-base font-bold shadow-primary transition-transform hover:-translate-y-0.5">
              <a href={JOIN_URL} target="_blank" rel="noreferrer">Join JForce Today <ArrowRight /></a>
            </Button>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-jforce-navy"><span className="flex items-center gap-2"><Check className="size-4 text-success" /> Free to join</span><span className="flex items-center gap-2"><Check className="size-4 text-success" /> Flexible hours</span><span className="flex items-center gap-2"><Check className="size-4 text-success" /> Twice-monthly payouts</span></div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="absolute -inset-3 rotate-2 rounded-2xl bg-primary/10" aria-hidden="true" />
            <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/hero.jpg" alt="JForce sales consultants celebrating together" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-image" />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-lg bg-card px-4 py-3 shadow-jforce sm:left-8"><span className="grid size-10 place-items-center rounded-full bg-success-soft text-success"><TrendingUp className="size-5" /></span><div><p className="text-xs text-muted-foreground">Your potential</p><p className="font-extrabold text-jforce-navy">Grows with every sale</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-10" aria-label="Trusted brands">
        <p className="mb-7 text-center text-sm font-semibold text-muted-foreground">Trusted by Jumia Uganda &amp; global brands</p>
        <div className="marquee-mask"><div className="marquee-track">{[...brands, ...brands].map((brand, index) => <div className="brand-card" key={`${brand}-${index}`} aria-hidden={index >= brands.length}>{brand}</div>)}</div></div>
      </section>

      <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Build income your way" title="Why Join the JForce Affiliate Program?" description="Everything you need to start selling confidently, grow your reach, and earn more on your own terms." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, description }) => <article key={title} className="group rounded-lg border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-jforce"><span className="grid size-14 place-items-center rounded-full bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-7" /></span><h3 className="mt-6 text-lg font-bold text-jforce-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></div></section>

      <section className="bg-section py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Open to everyone" title="Who Can Become a JForce Agent?" description="If you are motivated, connected, and ready to help people shop better, there is a place for you in JForce." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{agentTypes.map(({ icon: Icon, title, description }) => <article key={title} className="group flex gap-5 rounded-lg bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-jforce"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><Icon className="size-6" /></span><div><h3 className="font-bold text-jforce-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div></article>)}</div></div></section>

      <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="A simple path" title="How Jumia JForce Works" description="Follow four straightforward steps to kickstart your journey and begin earning." /><div className="relative grid gap-8 md:grid-cols-4"><div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-primary/20 md:block" aria-hidden="true" />{joinSteps.map(({ title, description, icon: Icon }, index) => <article key={title} className="relative text-center"><div className="relative mx-auto grid size-16 place-items-center rounded-full bg-jforce-navy text-primary-foreground shadow-lg"><Icon className="size-6" /><span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">{index + 1}</span></div><h3 className="mt-6 text-lg font-bold text-jforce-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></div></section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 hidden items-center justify-between gap-4 rounded-xl border border-border bg-card p-3 shadow-sm md:flex">
            <div className="flex items-center gap-3">
              <Menu className="size-5 text-muted-foreground" />
              <span className="text-xl font-black tracking-tight text-foreground">
                JUMIA <span className="text-primary">★</span>
              </span>
            </div>
            <div className="flex flex-1 max-w-xl items-center gap-2 rounded-full border border-input bg-muted/40 px-4 py-1.5 text-sm">
              <Search className="size-4 text-muted-foreground" />
              <span className="flex-1 text-muted-foreground">Search products, brands and categories</span>
              <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">Search</span>
            </div>
            <div className="flex items-center gap-5 text-xs font-semibold text-foreground">
              <span className="flex items-center gap-1"><UserRound className="size-4 text-muted-foreground" /> Hi, Agent</span>
              <span className="flex items-center gap-1"><Headphones className="size-4 text-muted-foreground" /> Help</span>
              <span className="flex items-center gap-1"><ShoppingCart className="size-4 text-muted-foreground" /> Cart</span>
            </div>
          </div>

          <div className="mb-14 text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              How to Place Your First Order
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Follow these easy steps to successfully place your first order as a JForce agent.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary/25 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

            <div className="space-y-8 md:space-y-10">
              {orderSteps.map(({ step, title, description }) => {
                const isEven = step % 2 === 0;
                return (
                  <div
                    key={step}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full pl-14 md:w-1/2 md:pl-0 md:px-8">
                      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:shadow-jforce">
                        <span className="inline-block text-sm font-bold text-primary mb-1">
                          {title}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/80">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-10 grid size-12 shrink-0 place-items-center rounded-full bg-primary text-base font-black text-primary-foreground shadow-md">
                      {step}
                    </div>

                    <div className="hidden w-1/2 md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Transparent rewards" title="Commission Structure" description="Your direct rate depends on your region and product bucket. Eligible team sales also attract a fixed 1% indirect rate." /><div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"><div className="bg-jforce-teal px-6 py-5 text-primary-foreground"><h3 className="text-lg font-bold">B2C Direct Commission Rates (All Levels)</h3><p className="mt-1 text-sm text-primary-foreground/70">Percentage of eligible delivered order value</p></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left"><thead><tr className="border-b border-border bg-muted"><th className="p-4 text-sm font-bold text-jforce-navy">Region / Location</th><th className="p-4 text-sm font-bold text-jforce-navy">Low</th><th className="p-4 text-sm font-bold text-jforce-navy">Medium</th><th className="p-4 text-sm font-bold text-jforce-navy">High</th><th className="p-4 text-sm font-bold text-jforce-navy">Super High</th></tr></thead><tbody><tr className="border-b border-border"><td className="p-4 font-semibold">Prime (Greater Kampala &amp; Entebbe)</td><td className="p-4 font-bold text-primary">1.00%</td><td className="p-4 font-bold text-primary">1.50%</td><td className="p-4 font-bold text-primary">2.00%</td><td className="p-4 font-bold text-primary">3.00%</td></tr><tr><td className="p-4 font-semibold">Non Prime (Upcountry)</td><td className="p-4 font-bold text-primary">1.50%</td><td className="p-4 font-bold text-primary">2.30%</td><td className="p-4 font-bold text-primary">3.00%</td><td className="p-4 font-bold text-primary">4.50%</td></tr></tbody></table></div></div><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><div className="bucket-card"><span>Low</span><h3>Essentials &amp; Care</h3><p>Beverages, Food cupboard, Household care, Laundry, Livestock</p></div><div className="bucket-card"><span>Medium</span><h3>Tech &amp; Electronics</h3><p>Appliances, Cameras, Mobile Accessories, Mobile Phones, Printers, Tablets, TV &amp; Video Accessories</p></div><div className="bucket-card"><span>High</span><h3>Home &amp; Hardware</h3><p>Camera Accessories, Computer, Consoles, Home, Small Appliances, Tablet Accessories, Tobacco</p></div><div className="bucket-card"><span>Super High</span><h3>Style, Sports &amp; Auto</h3><p>Fashion, Automotive &amp; Motorcycles, Books &amp; Stationery, Computer accessories, Games, Kids and Baby, Musical Instruments, Sport &amp; Fitness</p></div></div>
      <div className="mt-10"><EarningsCalculator /></div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3"><article className="info-card"><WalletCards /><div><h3>Payout Dates</h3><p>1st Payout: 15th–18th of the month. 2nd Payout: 2nd–5th of the following month.</p></div></article><article className="info-card"><UsersRound /><div><h3>Indirect Commission</h3><p>Fixed at 1% across all levels. Minimum team sales must be UGX 360,000 completed per month excluding the team leader.</p></div></article><article className="info-card"><PackageCheck /><div><h3>General Rules</h3><p>Consultants must place a minimum order(s) worth UGX 180,000 to be eligible for commission. Paid on orders that attain Delivered Final status (15 days post-delivery).</p></div></article></div></div></section>

      <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Effective from May 2nd 2026" title="New JForce Levels: Ascend to Greatness!" description="Achieve higher goals &amp; earn bigger rewards as your monthly sales volume increases." /><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">{levels.map(({ name, target, color, icon: Icon }, index) => <article key={name} className="relative overflow-hidden rounded-lg border border-border bg-card p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-jforce"><div className={`mx-auto grid size-12 place-items-center rounded-full ${color} text-primary-foreground`}><Icon className="size-5" /></div><p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Level {index + 1}</p><h3 className="mt-1 font-extrabold text-jforce-navy text-base">{name}</h3><p className="mt-2 text-xs font-bold text-primary">{target}</p></article>)}</div></div></section>

      <section className="bg-section py-20 sm:py-24"><div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Real JForce story" title="Testimonial from a J-Force Agent" description="Hear directly from an agent about the journey, community, and opportunity." /><div className="overflow-hidden rounded-lg border border-border bg-card shadow-image"><div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3" aria-hidden="true"><span className="size-3 rounded-full bg-browser-red" /><span className="size-3 rounded-full bg-browser-yellow" /><span className="size-3 rounded-full bg-browser-green" /><span className="ml-3 h-6 flex-1 rounded bg-background" /></div><div className="aspect-video"><iframe className="size-full" src="https://www.youtube.com/embed/hdD7oJMrg44" title="Testimonial from a JForce agent" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div></div></section>

      <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Support across Uganda" title="Meet Our Managers" description="Get in touch with our dedicated team across different regions." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{managers.map((manager) => <article key={manager.name} className="group overflow-hidden rounded-lg bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-jforce"><img src={manager.photo} alt={`${manager.name}, ${manager.role}`} loading="lazy" className={`aspect-[4/3] w-full bg-muted object-cover ${manager.position}`} /><div className="p-5"><h3 className="font-bold text-jforce-navy">{manager.name}</h3><p className="mt-1 min-h-10 text-sm leading-5 text-muted-foreground">{manager.role}</p><a href={`mailto:?subject=JForce enquiry for ${encodeURIComponent(manager.name)}`} aria-label={`Email ${manager.name}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"><Mail className="size-4" /> Send an email</a></div></article>)}</div></div></section>

      <section className="bg-jforce-navy py-20 text-primary-foreground sm:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10"><SectionHeading eyebrow="Get the answers" title="Frequently Asked Questions" description="Everything you need to know before starting your JForce journey." /><Accordion type="single" collapsible className="overflow-hidden rounded-lg bg-card text-foreground shadow-jforce">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question} className="px-5 last:border-b-0 sm:px-7"><AccordionTrigger className="py-5 text-base font-bold text-jforce-navy hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pr-8 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="relative overflow-hidden bg-cta py-20 sm:py-24"><div className="ambient ambient-three" aria-hidden="true" /><div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"><div className="mx-auto grid size-16 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground"><Rocket className="size-8" /></div><h2 className="mt-6 text-3xl font-black text-primary-foreground sm:text-5xl">Ready to turn your network into income?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">Join thousands of motivated consultants building flexible businesses with JForce.</p><Button asChild size="lg" className="mt-8 h-13 rounded-full bg-card px-7 text-base font-bold text-primary shadow-xl hover:bg-card/90"><a href={JOIN_URL} target="_blank" rel="noreferrer">Join JForce Today <ArrowRight /></a></Button><p className="mt-7 font-black text-jforce-yellow">KAMPALA · ENTEBBE · JINJA · EVERYWHERE IN UGANDA</p></div></section>

      <footer className="bg-footer py-12 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10"><div><p className="text-2xl font-black">JUMIA <span className="text-primary">JFORCE</span></p><p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/60">Helping independent sales consultants connect customers to the products they love.</p><div className="mt-5 flex gap-3"><a className="social-link" href="https://www.jumia.ug/sp-jforce/" target="_blank" rel="noreferrer" aria-label="Visit JForce website"><Building2 /></a><a className="social-link" href="https://web.facebook.com/jumiauganda" target="_blank" rel="noreferrer" aria-label="Visit JForce on Facebook"><Facebook /></a><a className="social-link" href="https://www.instagram.com/jumiauganda" target="_blank" rel="noreferrer" aria-label="Visit JForce on Instagram"><Instagram /></a></div></div><div className="space-y-3 text-sm text-primary-foreground/65"><p className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Uganda</p><a className="flex items-center gap-2 hover:text-primary-foreground" href="https://www.jumia.ug/sp-jforce/" target="_blank" rel="noreferrer"><ChevronRight className="size-4 text-primary" /> Official JForce website</a><a className="flex items-center gap-2 hover:text-primary-foreground" href={JOIN_URL} target="_blank" rel="noreferrer"><ChevronRight className="size-4 text-primary" /> Become a consultant</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-5 pt-6 text-xs text-primary-foreground/45 sm:px-8 lg:px-10">© 2026 Jumia JForce. All rights reserved.</div></footer>
    </main>
  );
}