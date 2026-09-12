import projects from "@/data/projects.json";

function getESG2WIN() {
  const project = projects.find((item) => item.id === "esg2win");
  if (!project || !project.fundingProgramme || !project.role || !project.institution || !project.acronym || !project.href || !project.researchDesign || !project.researchThemes || !project.softwareComponent || !project.softwareDeveloper || !project.benefits || !project.workPackages || !project.phases || !project.partners || !project.careerPeriod || !project.startYear) {
    throw new Error("ESG2WIN project data is incomplete.");
  }
  return { ...project, fundingProgramme: project.fundingProgramme, role: project.role, institution: project.institution, acronym: project.acronym, href: project.href, researchDesign: project.researchDesign, researchThemes: project.researchThemes, softwareComponent: project.softwareComponent, softwareDeveloper: project.softwareDeveloper, benefits: project.benefits, workPackages: project.workPackages, phases: project.phases, partners: project.partners, careerPeriod: project.careerPeriod, startYear: project.startYear };
}

export const esg2win = getESG2WIN();
