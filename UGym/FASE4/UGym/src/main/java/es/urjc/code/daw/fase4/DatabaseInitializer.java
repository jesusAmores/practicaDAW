package es.urjc.code.daw.fase4.activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.fase4.user.User;
import es.urjc.code.daw.fase4.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample activities

		activityRepository.save(new Activity("FITNESS","Todo tu entrenamiento será guiado por nuestro equipo de profesionales, con los que podrás compartir y solventar todo tipo de dudas y errores para optimizar tu forma física."));
		activityRepository.save(new Activity("PILATES","Espalda Sana, Técnicas de Relajación y Respiración, Stretching, Talleres de trabajo emocional... UGym te ofrece todo un abanico de eventos para que puedas aprender y disfrutar de una vida sana y equilibrada."));
		activityRepository.save(new Activity("SPINNING","Forma parte del pelotón ciclista liderado por nuestros mejores profesionales. Recorreras un sin fín de emociones con la mejor música y las más originales clases temáticas."));
		activityRepository.save(new Activity("ZUMBA","Un entrenamiento completo que combina todos los elementos del acondicionamiento físico: trabajo cardiovascular y muscular, equilibrio y flexibilidad, aumento de energía y muchísimos beneficios increíbles que disfrutarás después de cada clase."));

		// Sample Installations

		installationRepository.save(new Installation(1,'Sala de máquinas','Más de 150 m2  de zona de entrenamiento, pensada para que puedas entrenar con libertad y con todo tipo de equipamiento. Máquinas con carga de discos, poleas, barras, un gran número de mancuernas y bancos para que no esperes. Muchos deportistas se deciden por nuestras instalaciones por la cantidad y variedad de equipamiento que hay a disposición.Dispondrás de una zona de entrenamiento cardiovascular con equipamiento de última generación. Más de 70 equipos de cardio: cintas de correr, elípticas, steps, remos, bicicletas de diferentes tipos, incluso para personas que padezcan lesiones de espalda o tren inferior. Además tendrás la posibilidad de ver tu programa favorito de TV mientras entrenas, escuchar tu música conectando tu ipod a las máquinas, etc., conocerás una manera más amena y divertida de entrenar.', 'sala_maquinas.jpg'));
    installationRepository.save(new Installation(2,'Piscina','En nuestra piscina de agua salada podrás practicar la natación por libre o bien asistir a uno de los cursos de natación de nuestra amplia oferta. Disponemos de cursos tanto de iniciación como de perfeccionamiento o entrenamiento, para bebes, niños y adultos. También ofrecemos cursos para embarazadas y cursos de matronatación, que favorecen el equilibrio, la coordinación, el desarrollo psicomotor, la creatividad y la fuerza muscular del bebe, además de reforzar el vínculo entre los padres y el bebé.', 'piscina.jpg'));
    installationRepository.save(new Installation(3,'Sauna','Este medio de relajación ofrece incontables ventajas: desintoxica la piel, purifica el organismo, dilata los bronquios, regula la presión sanguínea, mejora el ritmo cardíaco y circulatorio.','sauna.jpg'));


		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}
