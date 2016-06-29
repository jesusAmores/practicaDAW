package es.urjc.code.daw.fase4.activity;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class InstallationController {

	private static final Logger log = LoggerFactory.getLogger(InstallationController.class);

	@Autowired
	private InstallationRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Installation> getInstallations() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Installation> getInstallation(@PathVariable long id) {

		log.info("Get Installation {}", id);

		Installation installation = repository.findOne(id);
		if (installation != null) {
			return new ResponseEntity<>(installation, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Installation nuevaInstallation(@RequestBody Installation installation) {

		repository.save(installation);

		return installation;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Installation> actulizaInstallation(@PathVariable long id, @RequestBody Installation updatedInstallation) {

		Installation installation = repository.findOne(id);
		if (installation != null) {

			updatedActivity.setId(id);
			repository.save(updatedInstallation);

			return new ResponseEntity<>(updatedInstallation, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Installation> borraInstallation(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
