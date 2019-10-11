import React, { Component } from "react";
import logo from "../_img/logo.svg";
import { Dropdown } from "react-bootstrap";
import $ from "jquery";
export class ExitNote extends Component {
  componentDidMount() {
    $(document).ready(function() {
      var dat = [];
      for (var i = 0; i < dat + 1; i++) {
        $("tbody").append(
          '<tr><td><input type="text" /></td><td><input type="text" /></td><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></tr>'
        );
      }

      $("#btn-add").click(function() {
        $("tbody").append(
          '<tr><td><input type="text" /></td><td><input type="text" /></td><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></tr>'
        );
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">
            <h4>Nota de Salida</h4>
          </div>

          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="btn-drop"
              >
                Umet Handel
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Ejemplo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ejemplo</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Ejemplo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="ml-3">
            <button className="btn btn-primary">Generar PDF</button>
          </div>
        </div>

        <div className="line m-5"></div>

        {/* <---------------- SECCIÓN HEADER -------------------> */}

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 text-1 d-flex align-items-center">
            <p className="p-1">
              <span className="font-weight-bold">UMET HANDEL SA DE CV</span>
              <br />
              Industria del Vidrio 264 Parque Industrial Martel II Santa
              Catarina, N.L. México 66350
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img src={logo}></img>
          </div>
          <div className="col-md-2 d-flex flex-column align-items-end color-r">
            <span className="t-min">Fecha</span>
            <h6>05-19-2019</h6>
          </div>

          <div className="col-md-2">
            <span className="t-min">Folio</span>
            <h6>541</h6>
          </div>
        </div>

        <div className="line m-5"></div>

        {/* <---------------- SECCIÓN FORMULARIO -------------------> */}

        <div className="row form-main justify-content-center">
          <div className="provider col-md-5  flex-wrap">
            <form>
              <h6 className="title-pro">Detalles</h6>

              <div className=" justify-content-between">
                <div className="form-group ">
                  <label for="name">Cliente</label>
                  <input className="form-control" type="text" id="name" />
                </div>

                <div className="form-group ">
                  <label for="placas">Dirección</label>
                  <input className="form-control" type="text" id="placas" />
                </div>

                <div className="form-group ">
                  <label for="chofer">Orden de compra cliente</label>
                  <input
                    className="form-control w-form"
                    type="text"
                    id="chofer"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="provider col-md-5 d-flex ">
            <form>
              <h6 className="title-pro">Datos</h6>

              <div className="  justify-content-between text-left inputData">
                <div className="form-group">
                  <label for="name"># Ticket Bascula</label>
                  <input
                    className="form-control w-form"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="form-group">
                  <label for="fac">Peso bruto</label>
                  <input className="form-control w-form" type="text" id="fac" />
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between">
                <div className="form-group w-50">
                  <label for="origen">Origen</label>
                  <input
                    className="form-control w-form"
                    type="text"
                    id="origen"
                  />
                </div>
                <div className="form-group">
                  <label for="sellos">Sellos</label>
                  <input
                    className="form-control w-form"
                    type="text"
                    id="sellos"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <---------------- FIN FORMULARIO -------------------> */}

        <div className="line m-5"></div>

        {/* <---------------- SECCIÓN TABLA -------------------> */}

        <div class="">
          <table className="table responsive table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Empaque</th>
                <th scope="col">Descripción</th>

                <th>Tara</th>
                <th>Peso Nieto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody className="td-inputs"></tbody>
          </table>

          <div class="" className="div-foot d-flex justify-content-between">
            <p className="" id="btn-add">
              + Agregar fila
            </p>
            <p className=""></p>
            <p className=""></p>
            <p className="">000.00</p>
            <p className="">000.00</p>
            <p className="">000.00</p>
          </div>
        </div>

        {/* <---------------- FIN TABLA-------------------> */}

        <div className="line m-5"></div>

        {/* <---------------- SECCIÓN FORMULARIO -------------------> */}

        <div className="row mt-5">
          <div class="col-md-6">
            <div className="form-group">
              <label for="">Comentarios</label>
              <textarea className="form-control" rows="12"></textarea>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="col-md-6">
              <div className="form-group mb-5">
                <label for="recibe">Recibe</label>
                <input className="form-control" type="text" id="recibe" />
              </div>

              <div className="inputCheck">
                <label className="checkbox-inline">
                  <input type="checkbox" className="mr-3" />
                  Revision Niton
                </label>
              </div>

              <div className="inputCheck">
                <label className="checkbox-inline">
                  <input type="checkbox" className="mr-3" />
                  Revisión Radación
                </label>
              </div>
            </div>

            <div className="col-md-6 form-bt">
              <div className="form-group">
                <label for="recibe">Descarga</label>
                <input
                  className="form-control"
                  type="text"
                  id="recibe"
                  placeholder="Georgia Maxweell"
                />
              </div>
              <div className="form-group">
                <label for="recibe">Realizo</label>
                <input
                  className="form-control"
                  type="text"
                  id="recibe"
                  placeholder="Craig Warner"
                />
              </div>
              <div className="form-group">
                <label for="recibe">Realizo</label>
                <input className="form-control" type="text" id="" />
              </div>
            </div>
          </div>
        </div>

        {/* <----------------  FIN FORMULARIO -------------------> */}

        <div className="line m-5"></div>

        <div className="signature d-flex  align-items-center">
          <span className="p-4">Firma</span>
        </div>

        <div className="text-center pf">
          <p>Agregar firma en pdf</p>
        </div>
      </div> // end container
    );
  }
}

export default ExitNote;
