import { Grid } from "@mui/material";
import React from "react";

interface Props {
	children?: React.ReactNode;
}

const Terms: React.FC<Props> = ({ children, ...props }) => {
	return (
		<Grid container justifyContent={"center"} marginTop={4} marginBottom={8}>
			<Grid item xs={12} sm={10} md={10} lg={8} >
            <h1> Termos De Uso </h1>
				<h3> 1. Termos </h3>
				<p>
					Ao acessar ao site Tatiane Modena, concorda em cumprir estes
					termos de uso, todas as leis e regulamentos aplicáveis ​​e
					concorda que é responsável pelo cumprimento de todas as leis
					locais aplicáveis. Se você não concordar com algum desses termos,
					está proibido de usar ou acessar este site. Os materiais contidos
					neste site são protegidos pelas leis de direitos autorais e
					marcas comerciais aplicáveis.
				</p>

				<br />
				<h3>2. Uso de Licença</h3>

				<p>
					É concedida permissão para baixar temporariamente uma cópia dos
					materiais (informações ou software) no site Tatiane Modena ,
					apenas para visualização transitória pessoal e não comercial.
					Esta é a concessão de uma licença, não uma transferência de
					título e, sob esta licença, você não pode:
				</p>
				<br />
				<ul>
					<li>modificar ou copiar os materiais;</li>
					<li>
						usar os materiais para qualquer finalidade comercial ou para
						exibição pública (comercial ou não comercial);
					</li>
					<li>
						tentar descompilar ou fazer engenharia reversa de qualquer
						software contido no site Tatiane Modena;
					</li>
					<li>
						remover quaisquer direitos autorais ou outras notações de
						propriedade dos materiais; ou
					</li>
					<li>
						transferir os materiais para outra pessoa ou 'espelhe' os
						materiais em qualquer outro servidor.
					</li>
				</ul>
				<br />
				<p>
					Esta licença será automaticamente rescindida se você violar
					alguma dessas restrições e poderá ser rescindida por Tatiane
					Modena a qualquer momento. Ao encerrar a visualização desses
					materiais ou após o término desta licença, você deve apagar todos
					os materiais baixados em sua posse, seja em formato eletrónico ou
					impresso.
				</p>

				<br />
				<h3>3. Isenção de responsabilidade</h3>
				<ul>
					<li>
						Os materiais no site da Tatiane Modena são fornecidos 'como
						estão'. Tatiane Modena não oferece garantias, expressas ou
						implícitas, e, por este meio, isenta e nega todas as outras
						garantias, incluindo, sem limitação, garantias implícitas ou
						condições de comercialização, adequação a um fim específico ou
						não violação de propriedade intelectual ou outra violação de
						direitos.
					</li>
					<li>
						Além disso, o Tatiane Modena não garante ou faz qualquer
						representação relativa à precisão, aos resultados prováveis
						​​ou à confiabilidade do uso dos materiais em seu site ou de
						outra forma relacionado a esses materiais ou em sites
						vinculados a este site.
					</li>
				</ul>

				<br />
				<h3>4. Limitações</h3>
				<p>
					Em nenhum caso o Tatiane Modena ou seus fornecedores serão
					responsáveis ​​por quaisquer danos (incluindo, sem limitação,
					danos por perda de dados ou lucro ou devido a interrupção dos
					negócios) decorrentes do uso ou da incapacidade de usar os
					materiais em Tatiane Modena, mesmo que Tatiane Modena ou um
					representante autorizado da Tatiane Modena tenha sido notificado
					oralmente ou por escrito da possibilidade de tais danos. Como
					algumas jurisdições não permitem limitações em garantias
					implícitas, ou limitações de responsabilidade por danos
					conseqüentes ou incidentais, essas limitações podem não se
					aplicar a você.
				</p>

				<br />
				<h3>5. Precisão dos materiais</h3>
				<p>
					Os materiais exibidos no site da Tatiane Modena podem incluir
					erros técnicos, tipográficos ou fotográficos. Tatiane Modena não
					garante que qualquer material em seu site seja preciso, completo
					ou atual. Tatiane Modena pode fazer alterações nos materiais
					contidos em seu site a qualquer momento, sem aviso prévio. No
					entanto, Tatiane Modena não se compromete a atualizar os
					materiais.
				</p>

				<br />
				<h3>6. Links</h3>

				<p>
					O Tatiane Modena não analisou todos os sites vinculados ao seu
					site e não é responsável pelo conteúdo de nenhum site vinculado.
					A inclusão de qualquer link não implica endosso por Tatiane
					Modena do site. O uso de qualquer site vinculado é por conta e
					risco do usuário.
				</p>

				<h4>Modificações</h4>
				<p>
					O Tatiane Modena pode revisar estes termos de serviço do site a
					qualquer momento, sem aviso prévio. Ao usar este site, você
					concorda em ficar vinculado à versão atual desses termos de
					serviço.
				</p>
				<h4>Lei aplicável</h4>
				<p>
					Estes termos e condições são regidos e interpretados de acordo
					com as leis do Tatiane Modena e você se submete irrevogavelmente
					à jurisdição exclusiva dos tribunais naquele estado ou
					localidade.
				</p>
			</Grid>
		</Grid>
	);
};

export default Terms;
