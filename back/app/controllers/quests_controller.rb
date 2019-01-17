class QuestsController < ApplicationController
  before_action :set_quest, only: [:show, :edit, :update, :destroy]

  QUESTS =
    [
      {
        id: 0,
        description: "Samba, na cara da inimiga vai\nSamba, desfila com as amiga vai\nSamba, na cara da inimiga vai\nSamba, desfila com as amiga",
        answers: [
          'Zeca pagodinho',
          'Jojô Toddynho',
          'Tom Zé',
          'Valesca Popozuda'
        ],
        correct_answer: 1
      },

      {
       id: 1,
       description: "Amar, amei\n
                     Gostar, gostei\n
                     Mas agora eu não quero\n
                     Nem de graça",
       answers: [
         'MC Jhonatan',
         'MC Brinquedo',
         'MC Loma e As Gêmeas Lacração',
         'Mc Don Juan'
       ],
       correct_answer: 3
      },

      {
        id: 2,
        description: "Punhos cerrados, olhos fechados\nE eu levanto a mão pro alto e grito\nVem comigo quem é do bonde pesadão!",
        answers: [
          'Sofia',
          'Iza',
          'Ingrid',
          'Mariana'
        ],
        correct_answer: 1
      },

      {
        id: 3,
        description: "We're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy",
        answers: [
          'Justin Bieber',
          'Michael Jackson',
          'The Killers',
          'Rick Astley'
        ],
        correct_answer: 3
      },
      {
        id: 4,
        description: "E aê, DG?\nEscama só de peixe\nUaai!\nCebruthius",
        answers: [
          'MC Loma e As Gêmeas Lacração',
          'MC Bruthius',
          'Furacão 2000',
          'MC Henrique'
        ],
        correct_answer: 0
      }
    ]

  # GET /quests
  # GET /quests.json
  def index
    respond_to do |format|
      format.json { render json: QUESTS }
    end
  end

  # GET /quests/1
  # GET /quests/1.json
  def show
  end

  # GET /quests/new
  def new
    @quest = Quest.new
  end

  # GET /quests/1/edit
  def edit
  end

  # POST /quests
  # POST /quests.json
  def create
    @quest = Quest.new(quest_params)

    respond_to do |format|
      if @quest.save
        format.html { redirect_to @quest, notice: 'Quest was successfully created.' }
        format.json { render :show, status: :created, location: @quest }
      else
        format.html { render :new }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quests/1
  # PATCH/PUT /quests/1.json
  def update
    respond_to do |format|
      if @quest.update(quest_params)
        format.html { redirect_to @quest, notice: 'Quest was successfully updated.' }
        format.json { render :show, status: :ok, location: @quest }
      else
        format.html { render :edit }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quests/1
  # DELETE /quests/1.json
  def destroy
    @quest.destroy
    respond_to do |format|
      format.html { redirect_to quests_url, notice: 'Quest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quest
      @quest = Quest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quest_params
      params.require(:quest).permit(:question, :options, :answer_idx)
    end
end
