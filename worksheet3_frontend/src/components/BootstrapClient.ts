"use client" // 标记为客户端组件（Next.js App Router要求）
import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js"); // 加载Bootstrap JS
  }, []);
  return null;
}

export default BootstrapClient;