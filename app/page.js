import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";
import IndexPage from "./components/information";

async function getGitProfile() {
  try {
    console.log("Fetching GitHub profile...");
    
    const res = await fetch(`https://api.github.com/users/${userData.githubUser}`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("GitHub profile data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null; // Trả về null nếu có lỗi để tránh crash app
  }
}


async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <IndexPage />
      <HeroSection profile={profile} />
      <GitStats />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <GitLanguage />
      <Rank />
      {/* <Contributions /> */}
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();

  return {
    title: `GitHub of TuanHao2003`,
    description: profile.description,
  };
};