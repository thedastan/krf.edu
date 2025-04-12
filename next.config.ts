import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
   images:{
    domains:["bekturk2025.pythonanywhere.com"]
   }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
 