// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Project details for modal
const projectDetails = {
    project1: {
        title: "Project 1: Renewable Energy Solutions",
        description: "This project focuses on sustainable, renewable energy sources to reduce dependency on non-renewables and promote clean energy."
    },
    project2: {
        title: "Project 2: Community-based Recycling Programs",
        description: "A project aimed at creating community-led recycling initiatives to minimize waste and encourage a circular economy."
    },
    project3: {
        title: "Project 3: Water Conservation Initiatives",
        description: "Focused on sustainable water conservation practices to help communities reduce water waste and manage resources."
    }
};

// Show project details in modal
function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.getElementById('engagementMessage').style.display = 'none';
}

// Engagement confirmation
function engageWithProject() {
    document.getElementById('engagementMessage').style.display = 'block';
}
