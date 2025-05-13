
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div id="contacts" className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
        Ваш персональный менеджер
      </h2>
      
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center bg-primary p-8 md:p-12">
              <div className="text-center">
                <Avatar className="w-40 h-40 border-4 border-white mx-auto mb-6">
                  <AvatarImage src="https://iimg.su/s/13/yhdBuhw6UdDhl46CYEUrYTNuECNyzkXqLrJenYdC.jpg" alt="Ирина Трубинова" />
                  <AvatarFallback className="text-3xl bg-primary-300">ИТ</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Ирина Трубинова</h3>
                <p className="text-white/80">Персональный менеджер</p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-lg text-gray-600 mb-8">
                Ирина поможет вам подобрать оптимальные препараты под ваши задачи, ответит на все вопросы и обеспечит индивидуальный подход к каждому клиенту.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 mb-2">Связаться напрямую:</p>
                  <a 
                    href="tel:+79166806904" 
                    className="flex items-center text-primary hover:text-primary-700 font-medium text-lg transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +7 (916) 680-69-04
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary-600"
                    onClick={() => window.open("tel:+79166806904", "_blank")}
                  >
                    <Phone className="mr-2 h-4 w-4" /> Позвонить
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary-50"
                    onClick={() => window.open("https://wa.me/79166806904", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
