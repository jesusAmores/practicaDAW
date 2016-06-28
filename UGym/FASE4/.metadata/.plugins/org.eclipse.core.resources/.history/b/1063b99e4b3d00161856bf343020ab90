package es.urjc.code.daw.fase4.tarifa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tarifa {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String tipo;
	private int precio;
	private String descipcion;
	

	public Tarifa() {}


	public Tarifa(String tipo, int precio, String descipcion) {
		super();
		this.tipo = tipo;
		this.precio = precio;
		this.descipcion = descipcion;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTipo() {
		return tipo;
	}


	public void setTipo(String tipo) {
		this.tipo = tipo;
	}


	public int getPrecio() {
		return precio;
	}


	public void setPrecio(int precio) {
		this.precio = precio;
	}


	public String getDescipcion() {
		return descipcion;
	}


	public void setDescipcion(String descipcion) {
		this.descipcion = descipcion;
	}


	@Override
	public String toString() {
		return "Tarifa [id=" + id + ", tipo=" + tipo + ", precio=" + precio + ", descipcion=" + descipcion + "]";
	}
}
