import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Beach from './BeachComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AttractionComponents = createStackNavigator(
    {
        Beach: { screen: Beach },
    }, 
);

const StackNavigator  = createAppContainer(AttractionComponents);

class Attractions extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>
                Λορεμ ιπσθμ δολορ σιτ αμετ, λαβιτθρ ιντερπρεταρισ εα qθο, ειρμοδ μνεσαρcηθμ τε εστ. Ινvενιρε πετεντιθμ cονcλθσιονεμqθε vιξ cθ, ταcιματεσ αδvερσαριθμ ναμ αδ. Νε vισ σθασ λιβερ, αδ αλια ιθστο εθμ, ναμ cηορο δοcενδι οφφιcιισ εα. Εοσ ετ σαεπε γραεcο σαπιεντεμ. Ει θσθ cασε cομπρεηενσαμ, ει νιηιλ vοcεντ περcιπιτ εστ. Προ ει βονορθμ σεντεντιαε, μαλισ μολλισ ηισ εξ, φερρι διcερετ οπορτεατ εθμ αν.
                Ιν σεδ vενιαμ φαcιλισι. Ιλλθδ εξπετενδισ ηισ νο, qθι διcαντ λεγιμθσ εα, δθο ιισqθε δεσερθντ δετερρθισσετ νο. Ηινc νοvθμ ατ vισ. Ιδ νονθμεσ διγνισσιμ ιντερπρεταρισ vελ, vιvενδο εξπλιcαρι ει περ, νο στετ δενιqθε ερροριβθσ θσθ. Αν πθτεντ μελιθσ εαμ.
                </Text>
                <StackNavigator />
            </View>
        );
    }
}

export default Attractions;