const excavationInput = document.getElementById('excavationAmount');
const transportationDistanceInput = document.getElementById('transportDistance');
const transportationMethodSelect = document.getElementById('transportMethod');
const equipmentHoursInput = document.getElementById('equipmentHours');
const equipmentTypeSelect = document.getElementById('equipmentType');
const mineTypeSelect = document.getElementById('mineType');
const calculateButton = document.querySelector('button');

const emissionFactors = {
    transportation: {
        truck: 0.2, 
        train: 0.05, 
        conveyor: 0.08 
    },
    equipment: {
        diesel: 2.7,
        electric: 0.5 
    },
    excavation: 0.01 
};


function calculateEmissions() {
    
    const coalExcavated = parseFloat(excavationInput.value) || 0;
    const transportationDistance = parseFloat(transportationDistanceInput.value) || 0;
    const transportationMethod = transportationMethodSelect.value;
    const equipmentHours = parseFloat(equipmentHoursInput.value) || 0;
    const equipmentType = equipmentTypeSelect.value;
    
    
    const excavationEmissions = coalExcavated * emissionFactors.excavation;
    const transportationEmissions = transportationDistance * emissionFactors.transportation[transportationMethod];
    const equipmentEmissions = equipmentHours * emissionFactors.equipment[equipmentType];

    
    const totalEmissions = excavationEmissions + transportationEmissions + equipmentEmissions;

    
    alert(`Total estimated emissions: ${totalEmissions.toFixed(2)} kg CO2`);
}

calculateButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    calculateEmissions(); 
});
