import Axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Actions from "src/Store/ImageDragger/Actions/index";

import { Iimage, Istateimage } from "src/Store/ImageDragger/types";

interface Iprops {
  fetchRequest: () => {};
  setimages: (images: Iimage[]) => {};
}

class Images extends React.Component<Istateimage & Iprops, {}> {
  constructor(props: any) {
    super(props);
    // this.state = this.props.fetchRequest();
    this.handleSetImage();
  }

  public handleSetImage = async () => {
    const image = await this.fetchImages();
    this.props.setimages(image);
  };
  public async fetchImages() {
    const { data: image } = await Axios.get<Iimage[]>(
      `https://api.unsplash.com/photos/?page=2;client_id=${
        process.env.REACT_APP_UNSPLASHED
      }`
    );
    return image;
  }
  public render() {
    const images = [...this.props.images];
    return (
      <React.Fragment>
        <div className="container page-top">
          <div className="row">
            {images.length <= 0
              ? "noimages"
              : images.map((image: Iimage) => {
                  return (
                    <div
                      key={image.id}
                      className="col-lg-4 col-md-4 col-xs-6 img-rounded"
                    >
                      <a href="#" className="img-rounded" rel="ligthbox">
                        <img className="zoom img-fluid" src={image.urls.raw} />
                      </a>
                    </div>
                  );
                })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ images }: Istateimage) => ({ images });
const mapDisptchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(Actions.fetchimages()),
  setimages: (image: Iimage[]) => dispatch(Actions.setimage(image))
});
export default connect(
  mapStateToProps,
  mapDisptchToProps
)(Images);
