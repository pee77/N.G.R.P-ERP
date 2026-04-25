import { Outlet } from "react-router-dom";
import AppProviders from "@/components/AppProviders";
import SiteCart from "@/components/SiteCart";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import GlobalLikeButton from "@/components/GlobalLikeButton";

export default function RootLayout() {
  return (
    <AppProviders>
      <SiteHeader />
      <SiteCart />
      <Outlet />
      <SiteFooter />
      <GlobalLikeButton />
    </AppProviders>
  );
}
