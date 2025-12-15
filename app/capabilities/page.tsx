"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Hash } from "lucide-react"

export default function CapabilitiesPage() {
  const { t } = useLanguage()

  const capabilities = [
    {
      id: "governance",
      title: t("capabilities.governance.title"),
      description: t("capabilities.governance.desc"),
      progress: 85,
      milestones: [
        { title: t("capabilities.milestone.policyFramework"), status: "completed", date: "2024-01" },
        { title: t("capabilities.milestone.governanceCommittee"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.complianceTooling"), status: "in-progress", date: "2024-05" },
        { title: t("capabilities.milestone.auditProcess"), status: "planned", date: "2024-08" },
      ],
    },
    {
      id: "education",
      title: t("capabilities.education.title"),
      description: t("capabilities.education.desc"),
      progress: 60,
      milestones: [
        { title: t("capabilities.milestone.basicTraining"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.advancedWorkshops"), status: "in-progress", date: "2024-04" },
        { title: t("capabilities.milestone.certificationProgram"), status: "planned", date: "2024-07" },
        { title: t("capabilities.milestone.mentorshipProgram"), status: "planned", date: "2024-10" },
      ],
    },
    {
      id: "contribution",
      title: t("capabilities.contribution.title"),
      description: t("capabilities.contribution.desc"),
      progress: 40,
      milestones: [
        { title: t("capabilities.milestone.contributionGuidelines"), status: "completed", date: "2024-03" },
        { title: t("capabilities.milestone.projectSelectionFramework"), status: "in-progress", date: "2024-06" },
        { title: t("capabilities.milestone.contributionMetrics"), status: "planned", date: "2024-09" },
        { title: t("capabilities.milestone.communityLeadership"), status: "planned", date: "2025-01" },
      ],
    },
    {
      id: "innersource",
      title: t("capabilities.innersource.title"),
      description: t("capabilities.innersource.desc"),
      progress: 30,
      milestones: [
        { title: t("capabilities.milestone.innersourceGuidelines"), status: "completed", date: "2024-03" },
        { title: t("capabilities.milestone.pilotProjects"), status: "in-progress", date: "2024-05" },
        { title: t("capabilities.milestone.toolingInfrastructure"), status: "planned", date: "2024-08" },
        { title: t("capabilities.milestone.organizationRollout"), status: "planned", date: "2024-12" },
      ],
    },
    {
      id: "security",
      title: t("capabilities.security.title"),
      description: t("capabilities.security.desc"),
      progress: 70,
      milestones: [
        { title: t("capabilities.milestone.securityScanning"), status: "completed", date: "2024-01" },
        { title: t("capabilities.milestone.licenseCompliance"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.vulnerabilityManagement"), status: "in-progress", date: "2024-04" },
        { title: t("capabilities.milestone.automatedCompliance"), status: "planned", date: "2024-07" },
      ],
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("capabilities.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("capabilities.subtitle")}</p>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Hash className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold">{t("capabilities.nav.title")}</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <a
                key={capability.id}
                href={`#${capability.id}`}
                className="text-sm text-primary hover:underline p-2 rounded hover:bg-background transition-colors"
              >
                {capability.title}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* End navigation */}

      <div className="grid gap-6">
        {capabilities.map((capability) => (
          <Card key={capability.id} id={capability.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{capability.title}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{t("capabilities.progress")}</div>
                  <div className="text-2xl font-bold">{capability.progress}%</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={capability.progress} className="h-2" />

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3">{t("capabilities.milestones")}</h4>
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-muted"></div>
                  <div className="space-y-6 relative">
                    {capability.milestones.map((milestone, index) => (
                      <div key={index} className="pl-6 relative">
                        <div
                          className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
                            milestone.status === "completed"
                              ? "bg-green-500 border-green-500"
                              : milestone.status === "in-progress"
                                ? "bg-yellow-500 border-yellow-500"
                                : "bg-background border-muted"
                          }`}
                        ></div>
                        <div className="flex justify-between">
                          <h5 className="font-medium">{milestone.title}</h5>
                          <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {milestone.status === "completed"
                            ? t("capabilities.status.completed")
                            : milestone.status === "in-progress"
                              ? t("capabilities.status.inProgress")
                              : t("capabilities.status.planned")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
