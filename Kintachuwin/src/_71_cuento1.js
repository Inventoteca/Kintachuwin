/**
 * Cuento (Leyenda) 1
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { playLocalSound, Imgn, Boton, BotonImg, Styles } from './mis-componentes';

// Es muy probable que se cambie la estructura
/*
<View style={{ flex: 1, flexDirection: 'row' }}>
    <Imgn source={require('../assets/_70/cn1.jpg')} width={160} />
    <View style={{ flex: 1, paddingLeft: 12 }}>
        <Text style={Styles.titulo}>
            <Text style={Styles.cursiva}>CHICHINI’ CHU MPAPA’</Text>
        </Text>
        <Text style={Styles.autor}>
            Por Arely López y Verónica Flores
        </Text>
    </View>
</View>
*/
function Cuento1({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_70/cn1.jpg')} width={320} />
                    <Text style={Styles.titulo}>
                        <Text style={Styles.cursiva}>CHICHINI’ CHU MPAPA’</Text>
                    </Text>
                    <Text style={Styles.autor}>
                        Por Arely López y Verónica Flores
                    </Text>

                    <Text style={Styles.tutunaku}>
                        {`Wa lu makgasa´ akxni´ la ninatu xanan´chichini´chu mpapa, tantum sluluk luwa xlakgati xan  tsitsiwan kakgtum chiwix anta xtatakgs kxa tachanan axcut. Wa´yuma xmalana tachanan makgtakgslh  mpi wa´yuma´sluluk xlakgalhima ntachanan, mapanuputulh man chiwix akxni´xamalh makgkatsilh pi tsits, nilah mapanulh kumu luwa tsing matasaninankgolh amakgapitsinin lakchixcuwin nima ntlakg lakgtliwakgan kampichi xmakgtayakgolh cha nilalh matsiwikgolh, mihl tantum spun litalakgapas “Tantsulut” kgawas xtapalanit, tiyalh man chiwix ni tuwa´ tsukulh makgolog  “skulu chiwix, skulu chiw” kilhwantilha alh lilakgapulh tani xtatakgs rey.

Chi yuma rey malakgpakglhinalh manchiwix, akxni´ talakgpakglh takgska akgtumnchiwix tu xpulakgtanuma skululuwa´, luwa stlan, slipwa´, makgskgoy. Chima xlakgtsuman rey tsukukgolh la lichipakgo, chatum xla´ xtlawaputun, wayuma xa skgata´ ntsumat nikgatsiy ntani na liwili kilhtanulh manchiwix kgotwalh. Alh kilh tamakú tsukulh mpastak chaxlhi kskgata´ kgawas. Staklhi tama´ nkgawas akxni´skgatakú xwanit tsekg tsukulh makgskgala´ chatum kgawas ntixkgalhtawakgama´  na an li chichini´  chi yuma kgawasa chtalakgatsuku nchiwix pakgs katsilh ntu xmasiyunikgan nti xamputun li chichini´.

Alhi nkilhtamakú, makgsanikga lhkuyat ntu xmaklakaskilh nti na an li chichini´. Chi yuma nkkgawas nti xkgalhtawakganit likga xpáxuwama luwa xlakgpuwaninita´ na an li chichini´ alh ntasani chatunu chatunu nti xlakgapaskgoy kumu kgatsita´ nti xtalaliyankgoy akxi anit chiyuma nkgawas xtalakgatsuku chiwiw man xnana nkitasanilh lakgapala, palakga analh lhkgan alh maklhkuyat tachaxlh nkgatalhman wa staku tsukukgolh li talakgoy lkuyat kgampichi likgwa´ xmaskgolh snun lalh mankgawas tsukgulh staja xkgalhni chima xkgalhni tu tamach nkatiyatni lakgtsupin wa, pin wankgolh xa lakgchichokg tu lay kTuxtla chi mankgawas xtamalakgatsuk chiwix tsukulh tapa´ chichini´wa, akxni chilh mankgawasa nti xkgalhtawakganit sitsilh nitlan tlawalh na lhkgan alhi ntani xwi lkuyat na tachaxlh nkatalhman tapalalh cha kumu kiya ka xa lkgakga xwi ka papa´ wa xlanchu.`}
                    </Text>


                    <Text style={Styles.titulo}>
                        EL SOL Y LA LUNA
                    </Text>

                    <Text style={Styles.texto}>
                        {`Hace mucho tiempo cuando aún no había Sol ni Luna en la Tierra, hubo una lagartija que le gustaba calentarse en una piedra que se encontraba en los cultivos de tabaco.  El dueño de estos cultivos se dio cuenta que la lagartija se comía sus plantas e intentó quitar la piedra y al momento de tocarla se dio cuenta que estaba tibia; además, no pudo moverla ya que esta estaba muy pesada, luego llamó a hombres fuertes para que lo ayudaran, pero no lo lograron. Un día llegó un pájaro llamado “tantsulut” convertido en un niño y rodó la piedra con gran facilidad diciendo “skululu chiwix, skululu chiwix”, hasta llevarla al castillo del rey.

El Rey mandó a romper la piedra y encontraron dentro de ella otra piedra muy peculiar; muy brillosa y hermosa. Las hijas del rey quisieron tenerla al ver lo preciosa que era; y empezó una fuerte disputa entre ellas. La hija menor decidió esconderla y al no hallar un lugar seguro, se la tragó. Tiempo después, la piedra empezó a crecer en su vientre hasta que “dio a luz” a un bebé varón. El bebé creció, y siendo un niño empezó a espiar a un joven de otra familia que estaba siendo preparado para convertirse en el Sol. El “niño piedra” aprendió todas las enseñanzas que le daban al joven.

Tiempo después, se encendieron las llamas necesarias para convertir al joven en el Sol. El joven que se había preparado para ser el Sol estaba muy emocionado y fue a llamar a cada integrante de su familia y conocidos para que se reunieran y lo vieran convertirse en el Sol, sin embargo, el “niño piedra” solo llamó a su abuelita y se apresuró a lanzarse sobre las llamas. Al hacerlo se elevó al cielo, mientras las estrellas le lanzaban fuego para que brillara. En ese momento el “niño piedra” fue herido y derramó sangre en la tierra. Sus gotas de sangre se convirtieron en chiltepín, y en otras variedades de chiles rojos que hoy en día crecen en Tuxtla. Después, el “niño piedra” comenzó a convertirse en el Sol. Cuando llegó el joven que estaba siendo preparado para ser el Sol, se enojó al ver el Sol formado y en su desesperación, se lanzó a donde estaban las llamas pero ya solo quedaban las cenizas. Al instante, este joven también se elevó al cielo y se convirtió en Luna.`}
                    </Text>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuento1;