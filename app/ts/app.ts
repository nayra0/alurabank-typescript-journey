import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

// comentário de teste
$('.form').submit(controller.adiciona.bind(controller));