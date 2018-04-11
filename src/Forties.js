import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.org/5itfznesd/0010_Johnny_Bill_Curly_Earl_ca._1945.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/fg4gstha5/0016_Bill_Earl_Curly_Johnny_Wesley_1945.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/wter7o4vh/0011_blk_sedan_40s.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/rur8t33ml/0012_sedan_side_view.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/oze5mp4wt/0013_sedan_front_view.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/eduaab11p/0014_white_sedan_front_view.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/sx1fbl4fh/0022_WGST_ca.mid-40_s.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/uc300c0dp/0023_Curly_E_B_wh_sedan.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/l4arjnvwd/0024_same_shoot_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/4gj9h6vzx/0025_same_shoot_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/xixjjwfnx/0026_Curly_same_as_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/k20l19ajx/0027_trio_same_as_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/rgpwtwz31/0028_Bill_same_as_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/imz0cbbz1/0029_E_B_same_as_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m6ky2bp19/0030_Curly_same_as_0022.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/4tannb93x/0037_Earl_Bill_Willys_boat.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/jchsot9zh/0082_Bill_on_right_poor_quality.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/jchsosmu5/0083_Josh_same_shoot.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/43rvazyal/0087_RCA_publicity_mid-40_s.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/4tannewa5/0088_Earl_closeup_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/izqeio20d/0089_E_B_C_legend_ditto_96.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6wl2v8w4t/008_Bolick_Children_ca_1940.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/yl7q2jtd9/0090_E_B_C_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/y8gbwfnz1/0091_E_B_C_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6l3miendp/0092_B_C_E_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/qfpo4axdp/0093_Bill_closeup_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/68c8c0urh/0094_Curly_closeup_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/a4pk83825/0095_E_B_C_closeup_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/izqeir219/0096_EBC_legend_ditto_89.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/9f6rvms25/0097_E_B.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/lh25pzjct/0098_Earl_big_grin_no_g.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/s7imzftnx/0099_Curly_closeup_no_f.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/l30tqpzct/0100_Earl_closeup_no_g.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/5vku5vui5/0101_colorized_1947.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/gv61hlv8t/0102_E_B_w_inst_colorized.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/f3d2mp465/0103_ditto.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/t8ivousql/0104_E_B_matching_pinstripes.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/hkottygct/0105_E_B_big_grins_inst.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/9qo88w8nh/0107_B_C_E_insts.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/eduaaadwd/0108_E_B_no_inst.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/g4dbc5sz1/0109_B_E_inst.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6jtop9vx9/0110_ditto_closeup.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/43rvb4vrh/0111_3d_try.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/l4arjsdxp/0112_B_C_E_inst_lite_suits.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/5621tmh4t/0113_Uncle_Josh_46_or_47.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/68c8c2s7h/0114_B_E_C_inst_in_shadows.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/jb7uvrijx/0115_E_C_B_inst.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nydwx15rh/0116_B_C_E_inst.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/vr4kp296l/0117_B_big_grin_closeup.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/n7l6rto4t/0118_E_C_B_legend.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/daa5yr13h/0119_B_E_C_medium_quality_legend.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/ia7m6aebh/0120_E_B_C_poor_quality.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6l3mi7kr1/0121_B_E_colorized.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6l3mif2t9/0122_Josh_Bill_Bristol.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/s68p6ck7x/0123_Bristol_dancers_47_plymouth.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/3pqjbtebh/0124_Josh_Bill_Bristol.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/42hxhyekt/0127_Bill_s_Instruments_1972.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/jp96ux7nx/Josh_Bill_Bristol.jpg', width: 0.2, height: 0.2 }
];

export class Forties extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}