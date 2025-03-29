#include <iostream>
#include<string>
#include <fstream>
#include<vector>
#include"vehicule.h"
using namespace std;

// Sistem de gestionare a parcarii

int main(){
    
    string path = "vehicule.txt";
    ifstream fin(path);
    if (!fin.is_open()) {
        cout << "Eroare la deschiderea fisierului " << path << " !" << endl;
        return 1;
    }

    vector<Vehicul*> vehicule;
    string tip_vehicul, nr_inmatriculare;
    int ora_intrarii, ora_iesirii;
    

    while (fin >> tip_vehicul >> nr_inmatriculare >> ora_intrarii >> ora_iesirii)
    {
        Vehicul* vehicul = nullptr;

        if (tip_vehicul == "Masina"){
            vehicul = new Masina;
        }
        else if (tip_vehicul == "Motocicleta")
        {
            vehicul = new Motocicleta;
        }
        else if (tip_vehicul == "Camion")
        {
            vehicul = new Camion;
        }    
        else if (tip_vehicul == "Bicicleta")
        {
            vehicul = new Bicicleta;
        }     

        vehicul->setNrInmatriculare(nr_inmatriculare);
        vehicul->setOraIntrarii(ora_intrarii);
        vehicul->setOraIesirii(ora_iesirii);
        
        vehicule.push_back(vehicul);
    }

    vehicule.push_back(new Masina("B123XYZ", 8, 12));
    vehicule.push_back(new Motocicleta("B987XYZ", 9, 11));
    vehicule.push_back(new Camion("B456XYZ", 7, 13));

    // for (auto v : vehicule)
    // {
    //     v->AfisareInfo();
    //     delete v;
    // }

    AfisareVehicule(vehicule);
    
    fin.close();

    return 0;
}