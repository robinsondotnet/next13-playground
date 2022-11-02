import Image from 'next/image';
import styles from './page.module.css'

async function getData() {
  const res = await fetch('http://localhost:3000/api/projects');

  return res.json();
}

export default async function Portfolio() {
  const projects: any[] = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <div className={styles.projectTitle}> {project.name} </div>
              <div className={styles.projectTeaser}>
                <Image alt="best project so far" />
              </div>
            </div>);
        })}
      </main>
    </div>
  );
}

