const forestryImpactInput = document.getElementById('forestryImpact');
const soilImpactInput = document.getElementById('soilImpact');
const wetlandImpactInput = document.getElementById('wetlandImpact');
const renewableImpactInput = document.getElementById('renewableImpact');
const calculateButton = document.querySelector('button');

function calculateTotalImpact() {
    const forestryImpact = parseFloat(forestryImpactInput.value) || 0;
    const soilImpact = parseFloat(soilImpactInput.value) || 0;
    const wetlandImpact = parseFloat(wetlandImpactInput.value) || 0;
    const renewableImpact = parseFloat(renewableImpactInput.value) || 0;

    const totalImpact = forestryImpact + soilImpact + wetlandImpact + renewableImpact;

    alert(`Total estimated impact: ${totalImpact.toFixed(2)} tons CO2`);
}

calculateButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    calculateTotalImpact(); 
});
