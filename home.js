const emissionEstimationLink = document.getElementById('emissionEstimation');
const carbonSinksLink = document.getElementById('carbonSinks');
const neutralityPathwaysLink = document.getElementById('neutralityPathways');
const dataVisualizationLink = document.getElementById('dataVisualization');

emissionEstimationLink.addEventListener('click', function(event) {
    
    window.location.href = Emission.html;
});

carbonSinksLink.addEventListener('click', function(event) {
    window.location.href = carbonSinksLink.href; 
});

neutralityPathwaysLink.addEventListener('click', function(event) {
    window.location.href = neutralityPathwaysLink.href; 
});

dataVisualizationLink.addEventListener('click', function(event) {
    window.location.href = dataVisualizationLink.href; 
});

const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function() {
    window.location.href = 'login.html'; 
});