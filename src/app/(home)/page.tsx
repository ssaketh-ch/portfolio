import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import { CertificationsSection } from '@/components/page-ui/CertificationsSection';

export default function Home() {
    return (
        <main>
            <LandingPage />
            <ExperienceSection />
            <SkillsSection />
            <CertificationsSection />
            <ProjectsSection />
            <ContactMeForm />
        </main>
    );
}
