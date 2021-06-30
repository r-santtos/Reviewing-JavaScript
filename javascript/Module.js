// Modules é usado para dividir o código em pequenos pedaços e assim facilitar construção e manutenção dos projetos.

// Atenção!!! para funcionar com javascript puro devemos passar o type="module" na hora de carregar o arquivo no header do site e precisamos rodar o arquivo index.html diretamente no servidor caso contrario não funcionarar.

// Exportando
export function ExportModules() {
  return 1 + 1;
}

// Importando, Atenção!!! como o modulo geralmente tem mais de uma functions devemos sempre usar {} para buscar o que precisamos apenas.
import {ExportModules} from './caminho do modulo';

// Exportação padrão
export default ExportModulesDefault() {
  return 2 + 2;
}

// Importando módulo padrão, nesse caso podemos passar qualquer nome dentro de {} e o caminho no caso de javascript puro precisamos passar a extensão do arquivo. Atenção!!! o ideal é você passar o nome {que representa a função}.
import {qualquerNome} from './caminha.js';