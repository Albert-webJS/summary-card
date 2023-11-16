const summaryCard = document.querySelector('.summary-card');
const progress = document.querySelector('.progress-stats__result');

const isMobile = window.innerWidth < 768;
const defaultProgressInt = 30
const endProgressInt = 76;


document.addEventListener('DOMContentLoaded', () => {
    init(); 
})


const init = async () => {
    await updateProgress(defaultProgressInt, endProgressInt, progress)
    addClassName(summaryCard, 'animation');
    await new Promise(() => setTimeout(onAnimationEnd, 500));
};

const updateProgress = async (defaultInt = 0, endInt = 100, elementView) => {
    for (let i = defaultInt; i <= endInt; i++) {
        elementView.textContent = i;

        await new Promise(resolve => setTimeout(resolve, i >= 60 ? 100 : 10));
    }
}

const addClassName = (element, className = '') => element.classList.add(className);

const onAnimationEnd = () => {
    summaryCard.scrollIntoView({ behavior: "smooth", block: "end", inline: 'nearest' });
};



