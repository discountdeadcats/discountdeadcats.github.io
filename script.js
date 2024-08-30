// Blog posts data
const blogPosts = [
    {
        title: "First Blog Post",
        date: "August 13, 2024",
        author: "Discountdeadcats",
        content: "Hello, welcome to my blog I will be posting about my projects and stuff I found intriguing. Contact me at discountdeadcats@protonmail.com"
    },
    {
        title: "My first 3d printer",
        date: "August 14, 2024",
        author: "Discountdeadcats",
        content: "Today I built an Ender 3 s1. I set up octo pi with octoeverywhere I might post a link to a stream occasionally."
    }
    {
        title: "The Dragon Fruit Pi",
        date: "August 30, 2024",
        author: "Discountdeadcats",
        content: "For the past  month I have been working on  the Dragon Fruit Pi a cyberdeck using a cm4 and pi pad 5 it is almost finished   ."
    }
    
];

// Projects data
const projects = [
    {
        title: "Project A",
        description: "Raspberry Pi AI home assistant.",
        updates: [
            { date: "August 10, 2024", content: "Started the project" },
            { date: "August 12, 2024", content: "Completed the initial design" }
            { date: "August 12, 2024", content: "Project on hold.fond problems" }

        ]
    }

    {
        title: "Project B",
        description: "Dragon fruit pi .",
        updates: [
            { date: "August 27, 2024", content: "assembled the parts" },
            { date: "August 29, 2024", content: "Comptred final draft: see https://github.com/discountdeadcats/dragon-fruit-pi" }
        ]
    }
];

// Function to render blog posts
function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    if (blogPostsContainer) {
        blogPostsContainer.innerHTML = '';
        blogPosts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post';
            article.innerHTML = `
                <h3>${post.title}</h3>
                <p class="post-meta">Posted on ${post.date} by ${post.author}</p>
                <p>${post.content}</p>
            `;
            blogPostsContainer.appendChild(article);
        });
    }
}

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const article = document.createElement('article');
            article.className = 'project';
            let updatesHTML = '';
            project.updates.forEach(update => {
                updatesHTML += `
                    <div class="update">
                        <p class="update-meta">${update.date}</p>
                        <p>${update.content}</p>
                    </div>
                `;
            });
            article.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="project-updates">
                    <h5>Recent Updates:</h5>
                    ${updatesHTML}
                </div>
            `;
            projectsContainer.appendChild(article);
        });
    }
}

// Initial render
renderBlogPosts();
renderProjects();
