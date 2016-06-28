package es.urjc.code.daw.fase4.gallery;

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
public class GalleryController {

	private static final Logger log = LoggerFactory.getLogger(GalleryController.class);

	@Autowired
	private GalleryRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Image> getImages() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Image> getImage(@PathVariable long id) {

		log.info("Get image {}", id);

		Image image = repository.findOne(id);
		if (image != null) {
			return new ResponseEntity<>(image, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Image nuevaImagen(@RequestBody Image image) {

		repository.save(image);

		return image;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Image> actulizaImagen(@PathVariable long id, @RequestBody Image updatedImage) {

		Image image = repository.findOne(id);
		if (image != null) {

			updatedImage.setId(id);
			repository.save(updatedImage);

			return new ResponseEntity<>(updatedImage, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Image> borraImagen(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
