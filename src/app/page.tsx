import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function Main() {
  const currentUserDetails = await currentUser();
  console.log(currentUserDetails);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <Image src="/logo.png" width={200} height={200} alt="Icon" />
          {currentUserDetails?.firstName && (
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">
            Automate Instagram DMs.
            <br />
            Keep conversations human.
          </h1>
          <p className="text-gray-600">
            ChatCraft helps creators and businesses automatically reply to
            Instagram messages, capture leads, and manage conversations — all
            from one simple dashboard.
          </p>
          <div className="pt-2">
            {!currentUserDetails?.firstName && (
              <Button>
                <Link href={"/dashboard"}>Login To ChatCraft</Link>
              </Button>
            )}
            {currentUserDetails?.firstName && (
              <Button>
                <Link href={"/dashboard"}>Go To Dashboard</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold mb-10">What ChatCraft does</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-dashed rounded p-6 space-y-3">
              <h3 className="font-medium">Auto-replies</h3>
              <p className="text-gray-600 text-sm">
                Instantly respond to common questions and keywords in your
                Instagram DMs.
              </p>
            </div>
            <div className="border-2 border-dashed rounded p-6 space-y-3">
              <h3 className="font-medium">Smart workflows</h3>
              <p className="text-gray-600 text-sm">
                Route conversations, tag users, and trigger actions based on
                messages.
              </p>
            </div>
            <div className="border-2 border-dashed rounded p-6 space-y-3">
              <h3 className="font-medium">One inbox</h3>
              <p className="text-gray-600 text-sm">
                View and manage all Instagram conversations from a single place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold mb-10">How it works</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 border-2 border-dashed rounded-full flex items-center justify-center">
                1
              </div>
              <p className="text-gray-600">
                Log in with your Instagram account.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 border-2 border-dashed rounded-full flex items-center justify-center">
                2
              </div>
              <p className="text-gray-600">
                Set up auto-replies and message rules.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 border-2 border-dashed rounded-full flex items-center justify-center">
                3
              </div>
              <p className="text-gray-600">
                Let ChatCraft handle your DMs while you focus on growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Ready to simplify Instagram messaging?
          </h2>
          <p className="text-gray-600">
            Sign in and start automating your conversations in minutes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-500 flex justify-between flex-col md:flex-row gap-4">
          <span>© {new Date().getFullYear()} ChatCraft</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>
    </main>
  );
}
