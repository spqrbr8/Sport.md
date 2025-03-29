#include<iostream>
#include<vector>
using namespace std;

class IVehicul {
    public:
        virtual int calculeazaTimp() const = 0;
        virtual double calculeazaTarif() const = 0;
        virtual ~IVehicul() {}
    };

class Vehicul: public IVehicul
{
protected:
    string nr_inmatriculare;
    int ora_intrarii, ora_iesirii;

public:
    int calculeazaTimp() const override { return ora_iesirii - ora_intrarii; }

    virtual double calculeazaTarif() const override { return 0 * calculeazaTimp(); }

    void setOraIntrarii(int ora_intrarii){ this->ora_intrarii = ora_intrarii; }

    void setOraIesirii(int ora_iesirii){ this->ora_iesirii = ora_iesirii; }

    void setNrInmatriculare(string nr_inmatriculare){ this->nr_inmatriculare = nr_inmatriculare; }

    virtual string getTip(){ return "Vehicul";}

    string getNrInmatriculare(){ return nr_inmatriculare; }


    void AfisareInfo(){
        cout << "Tip: " << getTip() << endl;
        cout << "Numar de inmatriculare: " << nr_inmatriculare << endl;
        cout << "Timp petrecut in parcare: " << calculeazaTimp() << " ore" << endl;
        cout << "Tarif total: " << calculeazaTarif() << " lei" << endl;
        cout << endl;
    }

};

class Masina: public Vehicul{  
public:
    Masina(){

    }

    Masina(string nr_inmatriculare, int ora_intrarii, int ora_iesirii){
        this->nr_inmatriculare = nr_inmatriculare;
        this->ora_intrarii = ora_intrarii;
        this->ora_iesirii = ora_iesirii;
    }

    double calculeazaTarif() const override { return 5 * Vehicul::calculeazaTimp(); }

    string getTip() override { return "Masina";}

};

class Motocicleta: public Vehicul{   
public:
    Motocicleta(){

    }

    Motocicleta(string nr_inmatriculare, int ora_intrarii, int ora_iesirii){
        this->nr_inmatriculare = nr_inmatriculare;
        this->ora_intrarii = ora_intrarii;
        this->ora_iesirii = ora_iesirii;
    }

    double calculeazaTarif() const override { return 3 * Vehicul::calculeazaTimp(); }

    string getTip() override { return "Motocicleta";}
};

class Camion: public Vehicul{
public:
    Camion(){

    }

    Camion(string nr_inmatriculare, int ora_intrarii, int ora_iesirii){
        this->nr_inmatriculare = nr_inmatriculare;
        this->ora_intrarii = ora_intrarii;
        this->ora_iesirii = ora_iesirii;
    }

    double calculeazaTarif() const override  { return 10 * Vehicul::calculeazaTimp();}

    string getTip() override { return "Camion";}
};

class Bicicleta: public Vehicul{
public:
    Bicicleta(){

    }

    Bicicleta(string nr_inmatriculare, int ora_intrarii, int ora_iesirii){
        this->nr_inmatriculare = nr_inmatriculare;
        this->ora_intrarii = ora_intrarii;
        this->ora_iesirii = ora_iesirii;
    }

    double calculeazaTarif() const override  { return (2 * Vehicul::calculeazaTimp() - 2) > 0 ? (2 * Vehicul::calculeazaTimp() - 2) : 0; }

    string getTip() override { return "Bicicleta"; }
};

void AfisareVehicule(vector<Vehicul*> vehicule){
    cout << " Tip\t\t" << "Nr. inmatriculare\t" << "Timpul petrecut\t\t" << "Tarif" << endl;
    cout << "-----------------------------------------------------------------------" << endl;
    int count = 1;
    for (auto vehicul : vehicule)
    {
        cout << count << ". " << vehicul->getTip() << "\t\t" << vehicul->getNrInmatriculare() << "\t\t"
         << vehicul->calculeazaTimp() << " ore\t\t\t" << vehicul->calculeazaTarif() << " lei" << endl;
        
        count++;
    }
}
