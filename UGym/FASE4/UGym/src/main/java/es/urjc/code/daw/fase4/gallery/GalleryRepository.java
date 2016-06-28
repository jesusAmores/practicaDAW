package es.urjc.code.daw.fase4.gallery;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GalleryRepository extends JpaRepository<Image, Long> {

}