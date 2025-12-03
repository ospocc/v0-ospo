"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Target, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Alex Chen",
      role: t("home.team.director"),
      email: "alex.chen@example.com",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sarah Johnson",
      role: t("home.team.manager"),
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Zhang",
      role: t("home.team.engineer"),
      email: "michael.zhang@example.com",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Liu",
      role: t("home.team.legal"),
      email: "emma.liu@example.com",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Wang",
      role: t("home.team.developer"),
      email: "david.wang@example.com",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const internalLinks = [
    { name: "Developer Portal", url: "#" },
    { name: "Legal Guidelines", url: "#" },
    { name: "Contribution Workflow", url: "#" },
    { name: "Training Resources", url: "#" },
  ]

  const externalLinks = [
    { name: "GitHub Organization", url: "https://github.com" },
    { name: "Open Source Initiative", url: "https://opensource.org" },
    { name: "FOSS Compliance", url: "https://www.linuxfoundation.org" },
    { name: "InnerSource Commons", url: "https://innersourcecommons.org" },
  ]

  return (
    <div className="container py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("home.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.subtitle")}</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* First Column: Vision and Mission */}
        <div className="space-y-6">
          <Card className="h-auto">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t("home.vision.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t("home.vision.content")}</p>
            </CardContent>
          </Card>
          <Card className="h-auto">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t("home.mission.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t("home.mission.content")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Second Column: Responsibilities */}
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>{t("home.responsibilities.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t("home.responsibilities.item1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t("home.responsibilities.item2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t("home.responsibilities.item3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t("home.responsibilities.item4")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t("home.responsibilities.item5")}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      {/* End of layout refactor */}

      <section>
        <h2 className="text-2xl font-bold mb-6">{t("home.team.title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <Card key={member.email} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-xs">{member.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{t("home.links.title")}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("home.links.internal")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {internalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="flex items-center text-primary hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("home.links.external")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {externalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="flex items-center text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
