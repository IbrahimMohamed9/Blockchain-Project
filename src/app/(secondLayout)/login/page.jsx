"use client";

import Button from "@/components/button";
import Form from "@/components/form";
import { connectWallet } from "@/utils/web3";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center flex-col h-screen">
      <Form title="Login">
        <Button
          type="Submit"
          title="Connect To MetaMask"
          onClick={async () => {
            const addresses = await connectWallet();
            localStorage.setItem("addresses", JSON.stringify(addresses));
            router.refresh();
          }}
        />
      </Form>
    </div>
  );
}