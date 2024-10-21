// Carregar a biblioteca de visualização e o pacote de gráficos
google.charts.load('current', {'packages':['corechart']});

// Função para desenhar o gráfico
function drawChart(chartType) {
  const chartTitle = document.getElementById("chartTitle").value;
  const dataTable = new google.visualization.DataTable();
  dataTable.addColumn('string', 'Categoria');
  dataTable.addColumn('number', 'Valor');

  const dataCount = document.getElementById("dataCount").value;
  for (let i = 0; i < dataCount; i++) {
    const category = document.getElementById(`category${i}`).value;
    const value = parseInt(document.getElementById(`value${i}`).value);
    dataTable.addRow([category, value]);
  }

  const options = {
    title: chartTitle,
    is3D: true
  };

  const chartContainer = document.getElementById('chart_div');
  let chart;
  if (chartType === 'pie') {
    chart = new google.visualization.PieChart(chartContainer);
  } else if (chartType === 'bar') {
    chart = new google.visualization.BarChart(chartContainer);
  }
  chart.draw(dataTable, options);
}

// Função para criar campos de entrada de dados
function createInputFields() {
  const dataCount = document.getElementById("dataCount").value;
  const inputsContainer = document.getElementById("inputsContainer");
  inputsContainer.innerHTML = ''; 

  for (let i = 0; i < dataCount; i++) {
    inputsContainer.innerHTML += `
      <div>
        <label>Categoria ${i + 1}:</label>
        <input type="text" id="category${i}" placeholder="Descrição da categoria">
        <label>Valor ${i + 1}:</label>
        <input type="number" id="value${i}" placeholder="Valor">
      </div>
    `;
  }
}